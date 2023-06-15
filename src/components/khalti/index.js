import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Button, CardActionArea, CardActions } from '@mui/material';
import { PIC } from "../../constants/image"
import config from './khaltiConfig';

export default function Khalti() {
    let checkout = new KhaltiCheckout(config);
  return (
    <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
               <CardMedia
                 component="img"
                 height="140"
                 image={PIC.khalti}
                 alt="khalti"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   Khalti Payment
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                 Rs. 1000 is required for registration. Do you Want to pay through khalti?
                 </Typography>
               </CardContent>
             </CardActionArea>
             <CardActions>
               <Button size="small" color="primary" onClick={() => checkout.show({amount: 1000})}>
                 Share
               </Button>
             </CardActions>
    </Card>
  )
}

