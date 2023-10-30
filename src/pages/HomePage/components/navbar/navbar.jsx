import React from "react";
import './nav.css';

// images
import flage1 from '../../../../assets/images/eng.png'
import flage2 from '../../../../assets/images/amarican_express.png'
import flage3 from '../../../../assets/images/us.png'
import logoD from '../../../../assets/images/logo_dark.png'
import compare from '../../../../assets/images/icons/compare.png';
import wishList from '../../../../assets/images/icons/wishlist.png';
import login from '../../../../assets/images/icons/login.png';
import phone from '../../../../assets/images/icons/navphone.png';
import search from '../../../../assets/images/icons/seechO.svg';
import shope from '../../../../assets/images/icons/shopO.svg';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem } from "../../../functins/functions";
const Navbar = () => {
    const { items } = useSelector(state => state.cart)

    const dispatch = useDispatch()
    // console.log(items);

    const removItemHandler = (item) => {
        dispatch(removeItem(item))
    }

    const increaseIQuantityHandler = (item) => {
        dispatch(increaseQuantity(item))
    }

    const decreaseIQuantityHandler = (item) => {
        dispatch(decreaseQuantity(item))
    }

    return (
        <>
            <div className="topDiv">
                <div className="container pt-3">
                    <div className="row topDiv">
                        <div className="col-md-3 gap-3">
                            <select className="border-0" name="" id="">
                                <option value="">English</option>
                                <option value="">France</option>
                                <option value="">United States</option>
                            </select>
                            <select className="border-0" name="" id="">
                                <option value="">USD</option>
                                <option value="">EUR</option>
                                <option value="">GBR</option>
                            </select>
                            <span className="phonNbr"> <img src={phone} className="img-fluid" alt="" /> 123-456-7890</span>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3 d-flex justify-content-end gap-3">
                            <span><img src={compare} className="img-fluid" alt="" /> Compare</span>
                            <span><img src={wishList} className="img-fluid" alt="" /> Wishlist</span>
                            <Link to="/Login" className="nav-link"><span><img src={login} className="img-fluid" alt="" /> Login</span></Link>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            {/* testing */}
            <nav class="navbar navbar-expand-lg  ">
                <div class="container d-flex justify-content-end gap-5 ">
                    <div> <Link to='/' ><img src={logoD} alt="image" /></Link></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <b> <ul class="navbar-nav me-auto gap-3 mt-2 mx-3 mb-2 mb-lg-0 ">
                            <li class="nav-item">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        HOME
                                    </a>
                                    <ul class="dropdown-menu mt-2 rounded-0">
                                        <div className="dropdown-content">
                                            <li><Link to="/" class="dropdown-item" href="#">Fashion 1</Link></li>
                                            <li><a class="dropdown-item" href="#">Fashion 2</a></li>
                                            <li><a class="dropdown-item" href="#">Furniture 1</a></li>
                                            <li><a class="dropdown-item" href="#">Furniture 2</a></li>
                                            <li><a class="dropdown-item" href="#">Electronics 1</a></li>
                                            <li><a class="dropdown-item" href="#">Electronics 2</a></li>
                                        </div>
                                    </ul>
                                </li>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PAGES
                                </a>
                                <ul class="dropdown-menu mt-2 rounded-0">
                                    <li><Link to="/AboutUs" class="dropdown-item" href="#">About Us</Link></li>
                                    <li><Link class="dropdown-item" to="/ContactUs">Contact Us</Link></li>
                                    <li><a class="dropdown-item" href="#">Faq</a></li>
                                    <li><a class="dropdown-item" href="#">404 Error Page</a></li>
                                    <li><Link class="dropdown-item" to="/Login">Login</Link></li>
                                    <li><Link class="dropdown-item" to="/Register">Register</Link></li>
                                    <li><a class="dropdown-item" href="#">Terms And Conditions</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTS
                                </a>
                                <ul class="dropdown-menu mt-2 rounded-0">
                                    <li><Link to="/HeroSection" class="dropdown-item" href="#">About Us</Link></li>
                                    <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="#">Faq</a></li>
                                    <li><a class="dropdown-item" href="#">404 Error Page</a></li>
                                    <li><a class="dropdown-item" href="#">Login</a></li>
                                    <li><a class="dropdown-item" href="#">Register</a></li>
                                    <li><a class="dropdown-item" href="#">Terms And Conditions</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BLOG
                                </a>
                                <ul class="dropdown-menu mt-2 rounded-0">
                                    <li><Link to="/HeroSection" class="dropdown-item" href="#">About Us</Link></li>
                                    <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="#">Faq</a></li>
                                    <li><a class="dropdown-item" href="#">404 Error Page</a></li>
                                    <li><a class="dropdown-item" href="#">Login</a></li>
                                    <li><a class="dropdown-item" href="#">Register</a></li>
                                    <li><a class="dropdown-item" href="#">Terms And Conditions</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/ShopList" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SHOP
                                </Link>
                                <ul class="dropdown-menu mt-2 rounded-0">
                                    <li><Link class="dropdown-item" to="/ShopList">Shop List</Link></li>
                                    <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="#">Faq</a></li>
                                    <li><a class="dropdown-item" href="#">404 Error Page</a></li>
                                    <li><a class="dropdown-item" href="#">Login</a></li>
                                    <li><a class="dropdown-item" href="#">Register</a></li>
                                    <li><a class="dropdown-item" href="#">Terms And Conditions</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown nav-link"><Link class="dropdown-item" to="/ContactUs"><b>CONTACT US</b></Link></li>
                        </ul>
                        </b>
                        <div className="float-end border-0 py-2  form-control me-2 d-flex justify-content-end  ">
                            <Link to="/login">
                                <img src={search} alt="search" width={30} />
                            </Link>
                            <div className="dropdown" >
                                <span className="position-relative" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <img src={shope} width={30} alt="" />  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    <span>{items.length}</span>
                                    {/* {items.length === 0? "" : <span>{items.length}</span>}  */}
                                    <span class="visually-hidden">unread messages</span>
                                </span></span>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    {items?.map((product) => {
                                        return (
                                            <div className="border-bottom pb-2">
                                                <li class="dropdown-item  mt-3">
                                                    <h6>{product.title}</h6>
                                                </li>
                                                <div className="">
                                                    <img src={product.pic} style={{ height: 200 }} className="img-fluid form-control border-0 px-0 mx-0" alt="pic" />
                                                </div>
                                                <div className="d-flex my-2">
                                                    <button className="rounded-2 p-2 bg-primary" onClick={() => decreaseIQuantityHandler(product)}>-</button>
                                                    <span className="p-2">{product.Quantity}</span>
                                                    <button className="rounded-2 p-2 bg-primary" onClick={() => increaseIQuantityHandler(product)}>+</button>
                                                    <span className="p-2"><b className="text-danger">{product.PRate}</b> <del>{product.ORate}</del> </span>
                                                </div>
                                                <button className="rounded-2 p-2 px-4 bg-black text-white" onClick={() => removItemHandler(product)}>Remove</button>
                                                <button className="rounded-2 p-2 px-4 bg-danger text-white">Shop Now</button>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};
export default Navbar;
