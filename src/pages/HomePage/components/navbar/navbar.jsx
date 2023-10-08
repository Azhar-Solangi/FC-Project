import React from "react";
import './nav.css';

// images
import flage1 from '../../../../assets/images/eng.png'
import flage2 from '../../../../assets/images/amarican_express.png'
import flage3 from '../../../../assets/images/us.png'
import logoD from '../../../../assets/images/logo_dark.png'
import search from '../../../../assets/images/magnifying.svg';
import shope from '../../../../assets/images/shopping-solid.svg';
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-3">
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">France</option>
                            <option value="">United States</option>
                        </select>
                        <select name="" id="">
                            <option value="">USD</option>
                            <option value="">EUR</option>
                            <option value="">GBR</option>
                        </select>
                        <span className="phonNbr">123-456-7890</span>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-3 d-flex justify-content-end gap-3">
                        <span>Compare</span>
                        <span>Wishlist</span>
                       <Link to="/Login"><span>Login</span></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-4">
                    <div class="col-md-3 mb-2 mb-md-0">
                        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                            <img src={logoD} alt="" />
                        </a>
                    </div>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" class="nav-link px-2">HOME</Link></li>

                        <li><a href="#" class="nav-link px-2">PAGES</a></li>
                        <li><a href="#" class="nav-link px-2">PRODUCTS</a></li>
                        <li><a href="../../../../assets/pages/ShopeList/ShopList.jsx" class="nav-link px-2">BLOG</a></li>
                        <li><Link to="/ShopList" class="nav-link px-2">SHOP</Link></li>
                        <li><Link to="/ContactUs" class="nav-link px-2">CONTACT US</Link></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <img src={search} alt="" width={30} />
                        <span className="position-relative"> <img src={shope} width={30} alt="" />  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                2
                                <span class="visually-hidden">unread messages</span>
                            </span></span>
                        {/* <button type="button" class="btn btn-primary position-relative">
                            Inbox
                          
                        </button> */}
                    </div>
                </header>
            </div>
{/* 
            <header className="header_wrap fixed-top header_with_topbar">
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <div className="lng_dropdown me-2">
                                        <select name="countries" className="custome_select">
                                            <option value='en' data-title="English"><img src={flage1} alt="flag" />EnglishB</option>
                                            <option value='fn' data-title="France"><img src={flage2} />France</option>
                                            <option value='us' data-title="United States"><img src={flage3} />United States</option>
                                        </select>
                                    </div>
                                    <div className="me-3">
                                        <select name="countries" className="custome_select">
                                            <option value='USD' data-title="USD">USD</option>
                                            <option value='EUR' data-title="EUR">EUR</option>
                                            <option value='GBR' data-title="GBR">GBR</option>
                                        </select>
                                    </div>
                                    <ul className="contact_detail text-center text-lg-start">
                                        <li><i className="ti-mobile"></i><span>123-456-7890</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-center text-md-end">
                                    <ul className="header_list">
                                        <li><a href="compare.html"><i className="ti-control-shuffle"></i><span>Compare</span></a></li>
                                        <li><a href="wishlist.html"><i className="ti-heart"></i><span>Wishlist</span></a></li>
                                        <li><a href="login.html"><i className="ti-user"></i><span>Login</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_header dark_skin main_menu_uppercase">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img className="logo_light" src={logoD} alt="logo" />
                                <img className="logo_dark" src={logoD} alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                                <span className="ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="dropdown">
                                        <a data-bs-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Home</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item" href="index.html">Fashion 1</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="index-2.html">Fashion 2</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="index-3.html">Furniture 1</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="index-4.html">Furniture 2</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="index-5.html">Electronics 1</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="index-6.html">Electronics 2</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle nav-link active" href="#" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item" href="about.html">About Us</a></li>
                                                <li><a className="dropdown-item nav-link nav_item active" href="contact.html">Contact Us</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="faq.html">Faq</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="404.html">404 Error Page</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="login.html">Login</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="signup.html">Register</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="term-condition.html">Terms and Conditions</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Products</a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex">
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Woman's</li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Vestibulum sed</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Donec porttitor</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Donec vitae facilisis</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-list.html">Curabitur tempus</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-load-more.html">Vivamus in tortor</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Men's</li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="order-completed.html">Vivamus in tortor</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Kid's</li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec porttitor</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Accessories</li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec porttitor</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="d-lg-flex menu_banners row g-3 px-3">
                                                <div className="col-sm-4">
                                                    <div className="header-banner">
                                                        <img src="assets/images/menu_banner1.jpg" alt="menu_banner1" />
                                                        <div className="banne_info">
                                                            <h6>10% Off</h6>
                                                            <h4>New Arrival</h4>
                                                            <a href="#">Shop now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="header-banner">
                                                        <img src="assets/images/menu_banner2.jpg" alt="menu_banner2" />
                                                        <div className="banne_info">
                                                            <h6>15% Off</h6>
                                                            <h4>Men's Fashion</h4>
                                                            <a href="#">Shop now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="header-banner">
                                                        <img src="assets/images/menu_banner3.jpg" alt="menu_banner3" />
                                                        <div className="banne_info">
                                                            <h6>23% Off</h6>
                                                            <h4>Kids Fashion</h4>
                                                            <a href="#">Shop now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Blog</a>
                                        <div className="dropdown-menu dropdown-reverse">
                                            <ul>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">Grids</a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-three-columns.html">3 columns</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-four-columns.html">4 columns</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-right-sidebar.html">right Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-standard-left-sidebar.html">Standard Left Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-standard-right-sidebar.html">Standard right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">Masonry</a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-three-columns.html">3 columns</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-four-columns.html">4 columns</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-right-sidebar.html">right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">Single Post</a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-single.html">Default</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-left-sidebar.html">left sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-slider.html">slider post</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-video.html">video post</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-audio.html">audio post</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">List</a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-list-left-sidebar.html">left sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="blog-list-right-sidebar.html">right sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Shop</a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex">
                                                <li className="mega-menu-col col-lg-9">
                                                    <ul className="d-lg-flex">
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Shop Page Layout</li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-list.html">shop List view</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">shop List Left Sidebar</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-load-more.html">Shop Load More</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Other Pages</li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Cart</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="my-account.html">My Account</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Wishlist</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="compare.html">compare</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="order-completed.html">Order Completed</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Product Pages</li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Default</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Left Sidebar</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Right Sidebar</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Thumbnails Left</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <div className="header_banner">
                                                        <div className="header_banner_content">
                                                            <div className="shop_banner">
                                                                <div className="banner_img overlay_bg_40">
                                                                    <img src="assets/images/shop_banner.jpg" alt="shop_banner" />
                                                                </div>
                                                                <div className="shop_bn_content">
                                                                    <h5 className="text-uppercase shop_subtitle">New Collection</h5>
                                                                    <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                                                                    <a href="#" className="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a className="nav-link nav_item" href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <ul className="navbar-nav attr-nav align-items-center">
                                <li><a href="javascript:;" className="nav-link search_trigger"><i className="linearicons-magnifier"></i></a>
                                    <div className="search_wrap">
                                        <span className="close-search"><i className="ion-ios-close-empty"></i></span>
                                        <form>
                                            <input type="text" placeholder="Search" className="form-control" id="search_input" />
                                            <button type="submit" className="search_icon"><i className="ion-ios-search-strong"></i></button>
                                        </form>
                                    </div><div className="search_overlay"></div>
                                </li>
                                <li className="dropdown cart_dropdown"><a className="nav-link cart_trigger" href="#" data-bs-toggle="dropdown"><i className="linearicons-cart"></i><span className="cart_count">2</span></a>
                                    <div className="cart_box dropdown-menu dropdown-menu-right">
                                        <ul className="cart_list">
                                            <li>
                                                <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                                <a href="#"><img src="assets/images/cart_thamb1.jpg" alt="cart_thumb1" />Variable product 001</a>
                                                <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                            </li>
                                            <li>
                                                <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                                <a href="#"><img src="assets/images/cart_thamb2.jpg" alt="cart_thumb2" />Ornare sed consequat</a>
                                                <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                            </li>
                                        </ul>
                                        <div className="cart_footer">
                                            <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbole">$</span></span>159.00</p>
                                            <p className="cart_buttons"><a href="#" className="btn btn-fill-line view-cart">View Cart</a><a href="#" className="btn btn-fill-out checkout">Checkout</a></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header> */}
            <Outlet/>


        </>
    )
};
export default Navbar;