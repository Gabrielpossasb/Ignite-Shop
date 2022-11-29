import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { Header } from "../../../styles/global";
import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product";
import ListProduct from "../../components/ListProduct";
import { stripe } from "../../lib/stripe";

import logoImg from '../../assets/logo.svg'
import { useCarShop } from "../../context/CarShop";

export interface ProductProps {
   product: {
      id: string;
      name: string;
      imageUrl: string;
      price: string;
      priceNumb: number;
      description: string;
      defaultPriceId: string;
   };
   quantidy: number;
}

export default function Product({ product }: ProductProps) {
   const { AddCarShop } = useCarShop()

   const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false)

   const [ quantidy, setQuantidy ] = useState(1)

   async function handleAddCart() {
      try {
         setIsCreatingCheckoutSession(true)

         AddCarShop({
            product: product,
            quantidy: quantidy
         })
         
         await new Promise(resolve => setTimeout(resolve, 1000))
         setIsCreatingCheckoutSession(false)
      } catch (err) {
         setIsCreatingCheckoutSession(false)
         alert('Falha ao redirecionar ao checkout!')
      }
   }

   return (
      <>
         <Head>
            <title>{product.name} | Ignite Shop</title>
         </Head>

         <Header>
            <Image onClick={() => Router.push('/')} src={logoImg} alt=''/>

            <ListProduct />
         </Header>

         <ProductContainer>
            <ImageContainer>
               <Image src={product.imageUrl} width={520} height={480} alt=''/>
            </ImageContainer>

            <ProductDetails>
               <h1>{product.name}</h1>
               <span>{product.price}</span>

               <p>{product.description}</p>
               
               <div className="quantidyChange">
                  <button className="btnQuantidyChange" onClick={() => setQuantidy(quantidy != 1 ? (quantidy - 1) : 1)}>
                     -
                  </button>
                  {quantidy}
                  <button className="btnQuantidyChange" onClick={() => setQuantidy(quantidy + 1)}>
                     +
                  </button>
               </div>

               <button disabled={isCreatingCheckoutSession} onClick={handleAddCart}>
                  Adicionar ao carrinho
               </button>
         </ProductDetails>
         </ProductContainer>
      </>
   )
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: "blocking",
   }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
   const productId = params.id;

   const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
   })

   const price = product.default_price as Stripe.Price
   
   return {
      props: {
         product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL',
            }).format( price.unit_amount / 100 ),
            priceNumb: price.unit_amount,
            description: product.description,
            defaultPriceId: price.id,
         }
      },
      revalidate: 60 * 60 * 1, // 1 hour
   }
}