
import React, { useRef, useState } from 'react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './hero.css'
// images

// baners carousel
import banerC1 from '../../../../assets/images/banner8.jpg'
import banerC2 from '../../../../assets/images/banner7.jpg'
import banerC3 from '../../../../assets/images/banner9.jpg'
import frotune1 from '../../../../assets/images/furniture_insta1.jpg'
import frotune2 from '../../../../assets/images/furniture_insta2.jpg'
import frotune3 from '../../../../assets/images/furniture_insta3.jpg'
import frotune4 from '../../../../assets/images/furniture_insta4.jpg'
import frotune5 from '../../../../assets/images/furniture_insta5.jpg'
import frotune6 from '../../../../assets/images/furniture_insta6.jpg'
// exclusive products
import product1 from '../../../../assets/images/furniture_img1.jpg'
import product2 from '../../../../assets/images/furniture_img2.jpg'
import product3 from '../../../../assets/images/furniture_img3.jpg'
import product4 from '../../../../assets/images/furniture_img4.jpg'
import product5 from '../../../../assets/images/furniture_img5.jpg'
import product6 from '../../../../assets/images/furniture_img6.jpg'
import product7 from '../../../../assets/images/furniture_img7.jpg'
import product8 from '../../../../assets/images/furniture_img8.jpg'
// logos
import logo1 from '../../../../assets/images/cl_logo1.png'
import logo2 from '../../../../assets/images/cl_logo2.png'
import logo3 from '../../../../assets/images/cl_logo3.png'
import logo4 from '../../../../assets/images/cl_logo4.png'
import logo5 from '../../../../assets/images/cl_logo5.png'
import logo6 from '../../../../assets/images/cl_logo6.png'

import baner1 from '../../../../assets/images/furniture_banner1.jpg'
import baner2 from '../../../../assets/images/furniture_banner2.jpg'
// icons
import icon1 from '../../../../assets/images/fn.png'
import icon2 from '../../../../assets/images/fn.png'
import icon3 from '../../../../assets/images/fn.png'
import icon4 from '../../../../assets/images/fn.png'



const HeroSection = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };

    const carosel = [
        {
            title: 'NEW TRANDING',
            heading: 'Sofa Collection',
            para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
            para2: 'blandit massa enim. Nullam id varius nunc id varius nunc.',
            button: 'SHOPE NOW',
            imgaUrl: ''
        },
    ];
    return (
        <>




            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                // effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                classNameName="mySwiper"
            >
                <SwiperSlide classNameName='swiper-slide'>
                    <div className='position-relative '>

                        <img classNameName='swiper-slide img ' src={banerC1} alt="img1" />
                        <div classNameName='cardHadding CardPosition'>
                            <h4 className='cardHadding'>NEW TRANDING</h4>
                            <h1 classNameName='heading'>Sofa Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus <br />blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            <button classNameName='btn1 rounded-5 p-3'><b>SHOPE NOW</b></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide classNameName='swiper-slide '>
                    <img classNameName='swiper-slide img img-fluid' src={banerC2} alt="img" />
                    {/* <div classNameName='position-absolute top-50 start-0 translate-middle-y ps-5 ms-5'> */}
                    <div classNameName='cardHadding  CardPosition'>
                        <h4 className='cardHadding'>Get up to 50% off Today Only!</h4>
                        <h1 classNameName='heading'>Wooden Chair <br /> Collection</h1>
                        <button classNameName='btn2 rounded-5 p-3'><b>SHOPE NOW</b></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide classNameName='swiper-slide '><img classNameName='swiper-slide img ' src={banerC3} alt="img" />
                    {/* <div classNameName='position-absolute top-50 start-0 translate-middle-y ps-5 ms-5'> */}
                    <div classNameName='cardHadding CardPosition'>
                        <h4 className='cardHadding'>Taking your Viewing Experience to Next Level</h4>
                        <h1 classNameName='heading'>Living Room <br /> Collection</h1>
                        <button classNameName='btn2 rounded-5 p-3'><b>SHOPE NOW</b></button>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* hard code */}
            <div className="main_content">


                <div className="section small_pb">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-3 col-sm-6">
                                <div className="icon_box icon_box_style3">
                                <div className="icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="icon_box_content">
                                    <h6>Free Delivery</h6>
                                    <p>Worldwide</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_box icon_box_style3">
                            <div className="icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="icon_box_content">
                                    <h6>Money Returns</h6>
                                    <p>30 Days money return</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_box icon_box_style3">
                                <div className="icon">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="icon_box_content">
                                    <h6>27/4 Online Support</h6>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_box icon_box_style3">
                                <div className="icon">
                                <img src={icon4} alt="" />
                                </div>
                                <div className="icon_box_content">
                                    <h6>Payment Security</h6>
                                    <p>Safe Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section small_pt pb_20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="heading_s3 text-center">
                                <h2>Exclusive Products</h2>
                            </div>
                            <div className="small_divider clearfix"></div>
                        </div>
                    </div>
                    <div className="row shop_container">
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product1} alt="furniture_img1" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">enim expedita sed</a></h6>
                                    <div className="product_price">
                                        <span className="price">$45.00</span>
                                        <del>$55.25</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product2} alt="furniture_img2" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">adipisci officia libero</a></h6>
                                    <div className="product_price">
                                        <span className="price">$55.00</span>
                                        <del>$95.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product3} alt="furniture_img3" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">Internet tend to repeat</a></h6>
                                    <div className="product_price">
                                        <span className="price">$68.00</span>
                                        <del>$99.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product4} alt="furniture_img4" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">Many desktop publishing</a></h6>
                                    <div className="product_price">
                                        <span className="price">$69.00</span>
                                        <del>$89.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product5} alt="furniture_img5" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">injected humour repetition</a></h6>
                                    <div className="product_price">
                                        <span className="price">$45.00</span>
                                        <del>$55.25</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product6} alt="furniture_img6" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">randomised humour words</a></h6>
                                    <div className="product_price">
                                        <span className="price">$55.00</span>
                                        <del>$95.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product7} alt="furniture_img7" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">expedita distinctio rerum</a></h6>
                                    <div className="product_price">
                                        <span className="price">$68.00</span>
                                        <del>$99.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="product_box text-center">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                        <img className="img-fluid" src={product8} alt="furniture_img8" />
                                    </a>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                            <li><a href="#"><i className="icon-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><a href="shop-product-detail.html">Itaque earum rerum</a></h6>
                                    <div className="product_price">
                                        <span className="price">$69.00</span>
                                        <del>$89.00</del>
                                        <div className="on_sale">
                                            <span>20% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        {/* <div className="rating">
                                            <div className="product_rate" ></div>
                                        </div> */}
                                        <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section pb_20 small_pt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single_banner">
                                <img className="img-fluid" src={baner1} alt="furniture_banner1" />
                                <div className="fb_info">
                                    <h5 className="single_bn_title1">Super Sale</h5>
                                    <h3 className="single_bn_title">New Collection</h3>
                                    <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single_banner">
                                <img className="img-fluid" src={baner2} alt="furniture_banner2" />
                                <div className="fb_info2">
                                    <h3 className="single_bn_title">New Season</h3>
                                    <h4 className="single_bn_title1">Sale 40% Off</h4>
                                    <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section small_pt pb_20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="heading_s3 text-center">
                                <h2>Trending items</h2>
                            </div>
                            <div className="small_divider clearfix"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="product_slider carousel_slider owl-carousel owl-theme nav_style4 d-flex" data-loop="true" data-dots="false" data-nav="true" data-margin="30" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                                <div className="item">
                                    <div className="product_box text-center">
                                        <div className="product_img">
                                            <a href="shop-product-detail.html">
                                                <img className="img-fluid" src={product1} alt="furniture_img1" />
                                            </a>
                                            <div className="product_action_box">
                                                <ul className="list_none pr_action_btn">
                                                    <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                    <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            <h6 className="product_title"><a href="shop-product-detail.html">enim expedita sed</a></h6>
                                            <div className="product_price">
                                                <span className="price">$45.00</span>
                                                <del>$55.25</del>
                                            </div>
                                            <div className="rating_wrap">
                                                {/* <div className="rating">
                                                    <div className="product_rate" ></div>
                                                </div> */}
                                                <span className="rating_num">(21)</span>
                                            </div>
                                            <div className="pr_desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product_box text-center">
                                        <div className="product_img">
                                            <a href="shop-product-detail.html">
                                                <img className="img-fluid" src={product2} alt="furniture_img2" />
                                            </a>
                                            <div className="product_action_box">
                                                <ul className="list_none pr_action_btn">
                                                    <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                    <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            <h6 className="product_title"><a href="shop-product-detail.html">adipisci officia libero</a></h6>
                                            <div className="product_price">
                                                <span className="price">$55.00</span>
                                                <del>$95.00</del>
                                            </div>
                                            <div className="rating_wrap">
                                                {/* <div className="rating">
                                                    <div className="product_rate" ></div>
                                                </div> */}
                                                <span className="rating_num">(15)</span>
                                            </div>
                                            <div className="pr_desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product_box text-center">
                                        <div className="product_img">
                                            <a href="shop-product-detail.html">
                                                <img className="img-fluid" src={product3} alt="furniture_img3" />
                                            </a>
                                            <div className="product_action_box">
                                                <ul className="list_none pr_action_btn">
                                                    <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                    <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            <h6 className="product_title"><a href="shop-product-detail.html">Internet tend to repeat</a></h6>
                                            <div className="product_price">
                                                <span className="price">$68.00</span>
                                                <del>$99.00</del>
                                            </div>
                                            <div className="rating_wrap">
                                                {/* <div className="rating">
                                                    <div className="product_rate" ></div>
                                                </div> */}
                                                <span className="rating_num">(25)</span>
                                            </div>
                                            <div className="pr_desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product_box text-center">
                                        <div className="product_img">
                                            <a href="shop-product-detail.html">
                                                <img className="img-fluid" src={product4} alt="furniture_img4" />
                                            </a>
                                            <div className="product_action_box">
                                                <ul className="list_none pr_action_btn">
                                                    <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                    <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            <h6 className="product_title"><a href="shop-product-detail.html">Many desktop publishing</a></h6>
                                            <div className="product_price">
                                                <span className="price">$69.00</span>
                                                <del>$89.00</del>
                                            </div>
                                            <div className="rating_wrap">
                                                {/* <div className="rating">
                                                    <div className="product_rate" ></div>
                                                </div> */}
                                                <span className="rating_num">(22)</span>
                                            </div>
                                            <div className="pr_desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product_box text-center">
                                        <div className="product_img">
                                            <a href="shop-product-detail.html">
                                                <img className="img-fluid" src={product5} alt="furniture_img5" />
                                            </a>
                                            <div className="product_action_box">
                                                <ul className="list_none pr_action_btn">
                                                    <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                    <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            <h6 className="product_title"><a href="shop-product-detail.html">injected humour repetition</a></h6>
                                            <div className="product_price">
                                                <span className="price">$45.00</span>
                                                <del>$55.25</del>
                                            </div>
                                            <div className="rating_wrap">
                                                {/* <div className="rating">
                                                    <div className="product_rate" ></div>
                                                </div> */}
                                                <span className="rating_num">(21)</span>
                                            </div>
                                            <div className="pr_desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product_box text-center">
                                        <div className="product_img">
                                            <a href="shop-product-detail.html">
                                                <img className="img-fluid" src={product6} alt="furniture_img6" />
                                            </a>
                                            <div className="product_action_box">
                                                <ul className="list_none pr_action_btn">
                                                    <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                    <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            <h6 className="product_title"><a href="shop-product-detail.html">randomised humour words</a></h6>
                                            <div className="product_price">
                                                <span className="price">$55.00</span>
                                                <del>$95.00</del>
                                            </div>
                                            <div className="rating_wrap">
                                                {/* <div className="rating">
                                                    <div className="product_rate" ></div>
                                                </div> */}
                                                <span className="rating_num">(15)</span>
                                            </div>
                                            <div className="pr_desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <a href="#" className="btn btn-fill-out btn-radius"><i className="icon-basket-loaded"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section small_pt small_pb">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-12">

                            <div className="follow_box">
                                <i className="ti-instagram"></i>
                                <h3>instagram</h3>
                                <span>@shoppingzone</span>
                            </div>
                            <div className="client_logo carousel_slider owl-carousel owl-theme container d-flex" data-dots="false" data-margin="0" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "6"}}'>
                                <div className="item">
                                    <div className="instafeed_box">
                                        <a href="#">
                                            <img className="img-fluid" src={frotune1} alt="furniture_insta1" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="instafeed_box">
                                        <a href="#">
                                            <img className="img-fluid" src={frotune2} alt="furniture_insta2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="instafeed_box">
                                        <a href="#">
                                            <img className="img-fluid" src={frotune3} alt="furniture_insta3" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="instafeed_box">
                                        <a href="#">
                                            <img className="img-fluid" src={frotune4} alt="furniture_insta4" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="instafeed_box">
                                        <a href="#">
                                            <img className="img-fluid" src={frotune5} alt="furniture_insta5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="instafeed_box">
                                        <a href="#">
                                            <img className="img-fluid" src={frotune6} alt="furniture_insta6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section small_pt">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="client_logo carousel_slider owl-carousel owl-theme container gap-5 d-flex" data-dots="false" data-margin="30" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'>
                                <div className="item">
                                    <div className="cl_logo">
                                        <img className="img-fluid" src={logo1} alt="cl_logo" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cl_logo">
                                        <img className="img-fluid" src={logo2} alt="cl_logo" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cl_logo">
                                        <img className="img-fluid" src={logo3} alt="cl_logo" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cl_logo">
                                        <img className="img-fluid" src={logo4} alt="cl_logo" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cl_logo">
                                        <img className="img-fluid" src={logo5} alt="cl_logo" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cl_logo">
                                        <img className="img-fluid" src={logo6} alt="cl_logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
        </>
    )
};
export default HeroSection;