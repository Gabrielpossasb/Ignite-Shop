import { ContainerCarShop, ImageContainerCart, ListProductContainer } from "../../styles/global";
import { FiShoppingCart, FiX } from "react-icons/fi"
import { useContext, useState } from "react";
import Router from "next/router";
import { CarShopProvider, useCarShop } from "../context/CarShop";
import Image from "next/image";
import axios from "axios";

export default function ListProduct() {
   const { carShop, DelItemCarShop } = useCarShop()

   const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false)
   const [ openCart, setOpenCart ] = useState('') 

   let total = 0;
   let totalItems = 0;

   async function handleBuyItems() {
      try {
         let ListItems = carShop.map(data =>{ return{ price: data.product.defaultPriceId, quantity: data.quantidy, }})

         const response = await axios.post('/api/checkout', {
            data: ListItems,
         })

         const { checkoutUrl } = response.data;

         window.location.href = checkoutUrl
      } catch (err) {
         setIsCreatingCheckoutSession(false)
         alert('Falha ao redirecionar ao checkout!')
      }
   }

   async function handleDeleteItem(id: string) {
      DelItemCarShop(
         id
      );
   }

   return (
      <>
            <ListProductContainer>
               <button className="openCart" onClick={() => setOpenCart('abrir')}>
                  <div className="NrItems">
                     {carShop.length}
                  </div>
                  <FiShoppingCart size={36} color={'#8D8D99'}/>
               </button>
            
               <ContainerCarShop state={(openCart != '') ? `${(openCart === 'abrir')?'abrir':'fechar'}` : 'fechado'}>
                  <div>
                     <div className="Head">
                        <strong className="Title">Sacola de compras</strong>
   
                        <FiX size={28} className={'close'} color={'#8D8D99'} onClick={() => setOpenCart('fechar')}/>
                     </div>
                     <div className="top">
                        {  carShop.map(data => { 

                              total = (total + data.product.priceNumb) * data.quantidy;
                              totalItems = data.quantidy + totalItems;

                           return (
                              <div className="ProductContainer" key={data.product.id}>
                                 <ImageContainerCart>
                                    <Image src={data.product.imageUrl} alt='' width={120} height={110}/>
                                 </ImageContainerCart>
            
                                 <div className="ProductDesc">
                                    <strong className="quantidy">
                                       {data.quantidy}
                                    </strong>

                                    <text className="Name">{data.product.name as string}</text>
                                    <strong>{data.product.price as string}</strong>
                                    <text className="Remover" onClick={() => handleDeleteItem(data.product.id)}>Remover</text>

                                 </div>
                              </div>
                           )})
                        }
                     </div>
   
                  </div>
   
                  <div className="foot">
                     <div className="Desc">
                        <text>Quantidade</text>
   
                        <text>{totalItems} itens</text>
                     </div>
                     <div className="Desc">
                        <strong>Valor total</strong>
   
                        <strong className="price">{ 
                           new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                           }).format( total / 100 )
                        }</strong>  
                     </div>
                     <button onClick={handleBuyItems}>
                        Finalizar compra
                     </button>
                  </div>
   
               </ContainerCarShop>
            </ListProductContainer>
         
      </>
      
      
   )
}