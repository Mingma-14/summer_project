import { Box, Typography ,Grid } from "@mui/material";
import PaymentCard from "../paymentcards/index"
import Khalti from "../khalti";

 export default function Payment(){
   return(
    <>
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"70px"} width={{md:"75%", sm:"100%", lg:"50%"}} margin={"auto"}>
    <Typography variant="h3">Choose Your Payment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}><PaymentCard/></Grid>
        <Grid item xs={12} sm={6} md={6}>  <Khalti/></Grid>
        
        </Grid>
        </Box>
    {/* <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"5px"}>
        
        
      
    </Box> */}

    </>
   )
  
}
