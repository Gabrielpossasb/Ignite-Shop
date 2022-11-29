import Image from 'next/image'
import React from 'react'
import Stripe from 'stripe'
import { HomeContainer, Product } from '../../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import Router from "next/router"
import Link from 'next/link'
import Head from 'next/head'
import { FiShoppingCart } from 'react-icons/fi'
import ListProduct from '../components/ListProduct'
import { Header } from '../../styles/global'

import logoImg from '../assets/logo.svg'

import 'keen-slider/keen-slider.cjs'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps){
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header>
        <Image onClick={() => Router.push('/')} src={logoImg} alt=''/>

        <ListProduct />
      </Header>
    
      <HomeContainer ref={sliderRef} className='keen-slider'>
        { products.map( product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <div>
              <Product className='keen-slider__slide'>
                <Image src={product.imageUrl} width={520} height={480} alt=''/>
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <text>{product.price}</text>
                  </div>
                  <button className="addCart" onClick={() => {}}>
                    <FiShoppingCart size={32} color={'#e7e7e7'}/>
                  </button>
                </footer>
              </Product> 
              </div>
            </Link>
          )
        })

        }
      </HomeContainer>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format( price.unit_amount / 100 ),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}
