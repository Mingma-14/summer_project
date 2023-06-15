import MuiCard from "../../components/muicards";
import { Box ,Grid} from "@mui/material";

export default function MemberLayout(){
    return(
        <>
         <Box width={{md:"75%", sm:"100%", lg:"50%"}} margin={"auto"} mt={"5%"}>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
       
        </Grid>
        </Box>
        </>
    )
}