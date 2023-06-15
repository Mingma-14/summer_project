
import NavBar from "./components/Navbar"
import Members from "./pages/member"
import SignUp from "./pages/SignUp"
import Footer from "./components/footer"
import Signin from "./components/SignIn"
import Payment from "./components/payment"

// import PaymentForm from "./pages/form"
// import PaymentForm from "./containers/SignUpLayout"
import { BrowserRouter, Routes , Route } from "react-router-dom"

//create an app component and export it
function App (){
    return(
   <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path="/" element={<h1>Welcome to Home Page</h1>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/members" element={<Members/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/payment" element={<Payment/>} />
            

            
        </Routes>
       
       
        <Footer/>
   </BrowserRouter>
    )
    }  
export default App