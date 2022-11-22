import { styled } from "@stitches/react";

export const SuccesContainer = styled('main', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '0 auto',
   height: 456,

   h1: {
      fontSize: '2rem',
      color: '$gray100',
   },

   p: {
      fontSize: '1.25rem',
      color: '$gray300',
      maxWidth: 560,
      textAlign: 'center',
      marginTop: '2rem',
      lineHeight: 1.4
   },

   a: {
      display: 'block',
      marginTop: '5rem',
      fontSize: '1.125rem',
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',

      '&:hover': {
         color: '$green300',
      }
   }
})

export const ImageContainer = styled('div', {
   width: '100%',
   maxWidth: 130,
   height: 145,
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   padding: '0.25rem',
   marginTop: '4rem',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover'
   }
})