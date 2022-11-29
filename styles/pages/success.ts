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
      marginTop: '3rem',
      lineHeight: 1.4
   },

   a: {
      display: 'block',
      marginTop: '4rem',
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
   borderRadius: 8,
   padding: '0.25rem',
   marginBottom: '4rem',

   
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   '.ImageCont': {
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: '10rem',
      boxShadow: '-8px 6px 10px #0f0f0f60',
      position: 'relative',


      img: {
         objectFit: 'cover',
      },

      '.quantity': {
         background: '$green500',
         padding: '4px 8px',
         borderRadius: 30,
   
         border: '4px solid $gray900',

         position: 'absolute',
         right: '38%',
         bottom: '-1.4rem',
      },
   },

   '.ImageCont:not(:first-child)': {
      marginLeft: '-2.5rem'
   },
   
   
})