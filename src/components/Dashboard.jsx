import React from 'react'
import '../components/dashboard.css'
import Image from "../IMG/image.png";
import { Box, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

function Dashboard() {
    const nevagite = useNavigate();
  return (
    <div>
   <div className="container">
  <div className="screen">
    <div className="screen__content">
    <Box sx={{backgroundImage: ` url( ${Image} )` ,position:'center' , backgroundRepeat:'no-repeat' , alignItems:'center' , display:'grid' , justifyContent:'center' , textAlign:'center' , width:'200px' , height:'212px', mt:13 ,ml:4 }}>
<Typography sx={{pt:20 , color:"white"}}>Email </Typography>
</Box>

      <div className="social-login">
     
      <NavLink style={{textDecoration:'none' , fontStyle:'italic' , fontSize:'30px' , color:'white'}} to={'/home'}>
<Typography sx={{fontSize:'22px' , pr:3 , ":hover":{color:'darkred' , border:'1px solid white'}}} >click to send email </Typography>
</NavLink>
        
        <div className="social-icons">
          <a href="#" className="social-login__icon fab fa-instagram" />
          <a href="#" className="social-login__icon fab fa-facebook" />
          <a href="#" className="social-login__icon fab fa-twitter" />
        </div>
      </div>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard