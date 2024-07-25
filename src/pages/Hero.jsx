
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LastFooter from "../components/LastFooter";
import { Outlet } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <Navbar/>
    
      <Outlet/>
    
    
    <Footer/>
    <LastFooter/>
    </>
    
  );
};

export default Hero;
