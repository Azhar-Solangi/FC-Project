
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
import icon1 from '../../../../assets/images/icons/deleveryTruck.png'
import icon2 from '../../../../assets/images/icons/moneyRetern.png'
import icon3 from '../../../../assets/images/icons/24service.png'
import icon4 from '../../../../assets/images/icons/paymentSecurity.png'



const HeroSection = () => {
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
                className="mySwiper"
            >
                <SwiperSlide className='position-relative'>
                    <img className='swiper-slide img ' src={banerC1} alt="img1" />
                    <div className=' container'>
                        <div className='position-absolute top-50 start-10 translate-middle-y'>
                            <h4 className=''>NEW TRANDING</h4>
                            <h1 className=''>Sofa Collection</h1>
                            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus </p> <p className='fs-6'>blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            <button type='button' className='btn btn-outline-dark rounded-pill px-5 py-3'><b>SHOPE NOW</b></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='position-relative'>
                    <img className='swiper-slide img img-fluid' src={banerC2} alt="img" />
                    <div className='container'>
                        <div className='position-absolute top-50 start-10 translate-middle-y'>
                            <h4 className=''>Get up to 50% off Today Only!</h4>
                            <h1 className='heading'>Wooden Chair <br /> Collection</h1>
                            <button type='button' className='btn btn-outline-danger rounded-pill px-5 py-3'><b>SHOPE NOW</b></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='position-relative'>
                    <img className='swiper-slide img ' src={banerC3} alt="img" />
                    <div className='container'>
                        <div className='position-absolute top-50 start-10 translate-middle-y'>
                            <h4 className=''>Taking your Viewing Experience to Next Level</h4>
                            <h1 className='heading'>Living Room <br /> Collection</h1>
                            <button type='button' className='btn btn-outline-danger rounded-pill px-5 py-3'><b>SHOPE NOW</b></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='container'>
                <div className='row my-5 mx-1'>
                    <div className='col-md-3 d-flex border p-4'>
                        <div>  <img src={icon1} alt="one" /></div>
                        <div className='ps-3'><h6><b>Free Delivery</b></h6>
                            Worldwide
                        </div>
                    </div>
                    <div className='col-md-3 d-flex border p-4'>
                        <div> <img src={icon2} alt="two" /> </div>
                        <div className='ps-3'><h6><b> Money Returns</b></h6>
                            30 Days money return
                        </div>
                    </div>
                    <div className='col-md-3 d-flex border p-4'>
                        <div> <img src={icon3} alt="three" /></div>
                        <div className='ps-3'><h6><b> 27/4 Online Support</b></h6>
                            Customer Support
                        </div>
                    </div>
                    <div className='col-md-3 d-flex border p-4'>
                        <div>  <img src={icon4} alt="four" /></div>
                        <div className='ps-3'>
                            <h6><b> Payment Security</b></h6>
                            Safe Payment
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default HeroSection;