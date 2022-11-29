import { styled } from "@stitches/react";
import { globalCss, keyframes } from ".";

const OpenCart = keyframes({
   '0%': { transform: 'translateX(140%)' },
   '100%': { transform: 'translateX(0%)' },
 });

export const globalStyles = globalCss({
   '*': {
      margin: 0,
      padding: 0,
   },

   body: {
      backgroundColor: "$gray900",
      color: '$gray100',
   },

   'body, inpu, textarea, button': {
      fontFamily: 'Roboto',
      fontWeight: 400,
   },
})

export const ListProductContainer = styled('div', {

   '.openCart': {
      background: '$gray800',
      padding: '0.7rem',
      border: 0,
      borderRadius: 8,
      transition: 'background ease 0.4s',
      position: 'relative',
      
      boxShadow: '4px 4px 4px #00000085',

      '&:hover': {
         background: '#2b2b2e',
         cursor: 'pointer',
      },

      '.NrItems': {
         background: '$green500',
         color: '$gray100',
         padding: '2px 6px',
         borderRadius: '5rem',

         border: '6px solid $gray900',

         position: 'absolute',
         top: -12,
         right:-12,
      },
   },
})

export const ContainerCarShop = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   width: 380,
   padding: '2rem',
   maxHeight: '100vh',
   justifyContent: 'space-between',

   background: '$gray800',
   color: '$gray100',

   zIndex: 10,
   position: 'fixed',
   right: 0,
   bottom: 0,
   top: 0,

   boxShadow: '-10px 0 20px #000000b2',

   transition: 'transform .6s',

   variants: {
      state: {
         fechado: {
            transform: 'translateX(140%)',
         },
         abrir: {
            transform: 'translateX(0%)',
         },
         fechar: {
            transform: 'translateX(140%)',
         }
      }
   },

   button: {
      background: '$green500',
      width: '100%',
      border: 0,
      borderRadius: 8,
      marginTop: '2rem',
      padding: '1rem',
      fontWeight: 700,
      color: '#fff',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
         background: '$green300',
         cursor: 'pointer',
      }
   },

   '.Head': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '.close': {
         borderRadius: '5rem',
         padding: 5,
         boxShadow: '4px 4px 4px #0000005e',
         transition: 'all 0.2s ease-in-out',

         '&:hover': {
            background: '$gray900',
            cursor: 'pointer',
         },
      },
   },
   '.foot': {
      position: 'relative',
      width: '100%',
      bottom: '0',
   },

   '.top': {
      marginTop: 8,
      overflowY: 'scroll',
      maxHeight: 390,
      borderRadius: 8,
   },
   
   '.Title': {
      fontSize: '1.4rem',
   },

   '.Desc': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '.9rem',
      marginBottom: '.8rem',
      color: '$gray100',

      '.price': {
         fontSize: '1.2rem',
      },
   },
   

   '.ProductContainer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '2rem',
   },

   '.ProductDesc': {
      display: 'flex',
      flexDirection: 'column',
      padding: 15,
      width: '100%',
      gap: 8,
      position: 'relative',

      '.Remover': {
         color: '$green500',

         '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
         },
      },
      '.Name': {
         color: '$gray300',
      },
      '.quantidy': {
         background: '$green500',
         padding: '8px 12px',
         borderRadius: 30,

         position: 'absolute',
         right: '1.5rem',
         bottom: 8,
      },     
   }
   
})

export const ImageContainerCart = styled('div', {
   width: '100%',
   maxWidth: '92px',
   height: '92px',
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   padding: '0.25rem',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover'
   }
})

export const Header = styled( 'header', {
   padding: '2rem 0',
   width: '100%',
   maxWidth: 1180,
   margin: '0 auto',
   display: 'flex',
   justifyContent: 'space-between',
})

