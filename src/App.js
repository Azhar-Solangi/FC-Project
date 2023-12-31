import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/homepage';
import Navbar from './pages/HomePage/components/navbar/navbar';
import Register from './pages/Register/Register';
import ShopList from './pages/ShopList/ShopList';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/aboutus';
import { ProductDetail } from './pages/productDetail/productDetail';


function App() {
 let router = createBrowserRouter([
    {
      path: "/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/ShopList",
          element:<ShopList/>
        },
        {
          path:"/ContactUs",
          element:<ContactUs/>
        },
        {
          path:"/AboutUs",
          element:<AboutUs/>
        },
        {
          path:"/Login",
          element:<Login/>
        },
        {
          path:"/Register",
          element:<Register/>
        },
        {
          path:"/ProductDetail",
          element:<ProductDetail/>
        },
      ]

    }
  ])
  return (
    <div >
      <RouterProvider router={router}/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
