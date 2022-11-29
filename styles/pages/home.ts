import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
   display: 'flex',
   width: '100%',
   maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
   marginLeft: 'auto',
   minHeight: 480,
   background: 'none',

   overflow: 'hidden',   
})

export const Product = styled('div', {
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   cursor: 'pointer',
   position: 'relative',
   overflow: 'hidden',
   
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover',
   },

   footer: {
      position: 'absolute',
      bottom: '0.25rem',
      left: '0.25rem',
      right: '0.25rem',
      padding: '1rem',

      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      backgroundColor: 'rgba(0, 0, 0, 0.6)',

      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',

      strong: {
         fontSize: '18px',
         color: '$gray100'
      },

      text: {
         fontSize: '20px',
         fontWeight: 'bold',
         color: '$green300',
      },

      div: {
         display: 'flex',
         flexDirection: 'column',
         gap: 10
      },

      '.addCart': {
         background: '$green500',
         padding: '0.6rem',
         border: 0,
         borderRadius: 8,
         transition: 'background ease 0.4s',
         
         '&:hover': {
            background: '$green300',
            cursor: 'pointer',
         }
      },
   },

   '&:hover': {
      footer: {
         transform: 'translateY(0%)',
         opacity: 1,
      }
   }
})