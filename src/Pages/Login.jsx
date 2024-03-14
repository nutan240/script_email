import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Image1 from "../IMG/login.jpg";
import Image from "../IMG/image.png";
import { NavLink } from 'react-router-dom';


function Login() {
  return (
    <>
     
<Box  sx={{objectFit: "cover",
   alignItems:'center' , display:'block'  , textAlign:'center',
    overflow: "auto",
    height: "100vh",
    width: '100%',}} >
<Box sx={{backgroundImage: ` url( ${Image} )` , margin:'auto' , position:'center' , backgroundRepeat:'no-repeat' , alignItems:'center' , display:'grid' , justifyContent:'center' , textAlign:'center' , width:'200px' , height:'212px' }}>
<Typography sx={{pt:20 , color:"white"}}>Email </Typography>
</Box>
{/* <NavLink to={'/home'}>
<Typography  >click to send email </Typography>
</NavLink> */}
    

</Box>
    </>
  )
}

export default Login