import Document, { Head, Html, Main, NextScript } from "next/document"
import React from "react";
import { getCssText } from "../../styles";

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel="shortcut icon" type="image/svg" href="/Icon.svg"/>

               <link rel="preconnect" href="https://fonts.googleapis.com"/>
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
               <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>

               <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/>
            </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>   
         </Html>
      );
   }
}