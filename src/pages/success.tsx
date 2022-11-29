import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { Header } from "../../styles/global";
import { ImageContainer, SuccesContainer } from "../../styles/pages/success";
import { stripe } from "../lib/stripe";
import Router from "next/router";

import logoImg from '../assets/logo.svg'

interface SuccessProps {
   customerName: string;
   products: {
      name: string;
      imageUrl: string;
      quantity: number;
   }[];
}

export default function Success({customerName, products}: SuccessProps) {
   return (
      <>
         <Head>
            <title>Compra Realizada! | Ignite Shop</title>
         </Head>

         <Header>
            <Image onClick={() => Router.push('/')} src={logoImg} alt=''/>
         </Header>

         <SuccesContainer>

         <ImageContainer>
         {
            products.map(item => (
               <div className="ImageCont">
                  <Image src={item.imageUrl} width={150} height={150} alt=''/>
                  <strong className="quantity">
                     {item.quantity}
                  </strong>
               </div>
            ))
         }
         </ImageContainer>

         <h1>Compra efetuada!</h1>
         
         <p>
            Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length} modelo{products.length > 1 && 's'}</strong> de camiseta{products.length > 1 && 's'} já está a caminho da sua casa. 
         </p>

         <Link href={'/'}>
            Voltar ao catálogo
         </Link>
      </SuccesContainer>
      </>
   )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   if (!query.session_id) {
      return {
         redirect: {
            destination: '/',
            permanent: false,
         }
      }
   }

   const sessionId = String(query.session_id);

   const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
   })

   const customerName = session.customer_details.name;
   const products = session.line_items.data.map((item) => {
      const product = item.price.product as Stripe.Product;
      return {
        name: product.name,
        imageUrl: product.images[0],
        quantity: item.quantity,
      };
    });
  
    return {
      props: {
        customerName,
        products: products,
      },
    };
}