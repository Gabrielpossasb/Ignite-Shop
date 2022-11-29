import { createContext, ReactNode, useContext, useState } from "react";
import { ProductProps } from "../pages/product/[id]";

interface CarShopProviderProps {
   children: ReactNode;
 }
 
 interface CarShopContextData {
   carShop: ProductProps[];
   AddCarShop: ( newProduct: ProductProps) => void;
	DelItemCarShop: ( itemID: string ) => void;
 }

const CarShopContext = createContext<CarShopContextData>(
   {} as CarShopContextData
 );

 export function CarShopProvider ({children}: CarShopProviderProps) {
   const [ carShop, setCarShop ] = useState<ProductProps[]>([]);
 
   async function AddCarShop(newProduct: ProductProps) {
		let safe = carShop.map(data => {return newProduct.product.id === data.product.id})
		
		if (!safe[0]) {
			console.log(safe)
      	setCarShop([...carShop, newProduct]);
		}

		safe = []
   };

	async function DelItemCarShop(itemID: string) {
		const NewCartShop = carShop.filter(data => { return data.product.id != itemID})

		setCarShop(NewCartShop)
	} ;

  return (
     <CarShopContext.Provider value={{ carShop, AddCarShop, DelItemCarShop }}>
       {children}
     </CarShopContext.Provider>
   );
 }
 
 export function useCarShop() {
   const context = useContext(CarShopContext);
 
   return context;
 }