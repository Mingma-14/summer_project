import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { PIC } from "../../constants/image"


    // 
    class PaymentCard extends React.Component  {
        post = (path, params) => {
          var form = document.createElement("form");
          form.setAttribute("method", "POST");
          form.setAttribute("action", path);
      
          for (var key in params) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
          }
      
          document.body.appendChild(form);
          form.submit();
        };
      
        handleClick = () => {
          var path = "https://uat.esewa.com.np/epay/main";
          var params = {
            amt: 1000,
            psc: 0,
            pdc: 0,
            txAmt: 0,
            tAmt: 1000,
            pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
            scd: "EPAYTEST",
            su: "http://merchant.com.np/page/esewa_payment_success",
            fu: "http://merchant.com.np/page/esewa_payment_failed"
          };
      
          this.post(path, params);
        };
        

        render() {
            return(
                <Box>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea >
               <CardMedia
                 component="img"
                 height="140"
                 image={PIC.esewa}
                 alt="esewa"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   eSewa Payment
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   Rs. 1000 is required for registreation.
                   Do you Want to pay through eSewa? 
                 </Typography>
               </CardContent>
             </CardActionArea>
             <CardActions>
               <Button size="small" color="primary" onClick={this.handleClick}>
                 Share
               </Button>
             </CardActions>
            
           </Card>
         
          </Box>
               )
        }
           
               
              
        
 
}
export default PaymentCard