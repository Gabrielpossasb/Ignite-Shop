import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product";

export default function Product() {
   const { query } = useRouter()

   return (
      <ProductContainer>
         <ImageContainer>

         </ImageContainer>

         <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis deserunt nulla dignissimos laboriosam illo ab tenetur dolore asperiores esse deleniti facere accusantium minus assumenda unde, quia id? Vitae, quae?</p>

            <button>
               Comprar agora
            </button>
         </ProductDetails>
      </ProductContainer>
   )
}

export const getStaticPropa: GetStaticProps = async () => {

   
   return {
      props: {},
      revalidate: 60 * 60 * 1, // 1 hour
   }
}