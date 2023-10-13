import ShopFooter from "../ShopList/components/footer/footer";
import ExclusiveProducts from "./components/ExclusiveProducts/ExclusiveProduvts";
import TreadingCarosel from "./components/Treandingcarousels/carousels";
import HeroSection from "./components/heroSection/heroSection";
import Navbar from "./components/navbar/navbar";
import Footer from "./footer/footer";

const HomePage =()=> {
   return <>
    {/* <Navbar/> */}
    <HeroSection/>
    <ExclusiveProducts/>
    <TreadingCarosel/>
    <ShopFooter/>
    {/* <Footer/> */}
    </>
    
} 
export default HomePage;