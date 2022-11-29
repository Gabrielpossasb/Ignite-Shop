import { AppProps } from "next/app"
import { globalStyles } from "../../styles/global"
import { Container } from "../../styles/pages/app"
import { CarShopProvider } from "../context/CarShop"

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <Container>
      <CarShopProvider>
        <Component {...pageProps} />
      </CarShopProvider>
    </Container>
  )
}

export default MyApp
