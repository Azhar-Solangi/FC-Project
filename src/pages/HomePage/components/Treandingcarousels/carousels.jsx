import React from "react";
import { Autoplay, Loope, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// images
import item from "../../../../assets/images/furniture_img1.jpg";
import item1 from "../../../../assets/images/furniture_img2.jpg";
import item2 from "../../../../assets/images/furniture_img3.jpg";
import item3 from "../../../../assets/images/furniture_img4.jpg";
import item4 from "../../../../assets/images/furniture_img5.jpg";
import item5 from "../../../../assets/images/furniture_img6.jpg";
import star from "../../../../assets/images/stars7.svg";
import redrow from "../../../../assets/images/redRow.svg";
// instagram
import insta1 from "../../../../assets/images/furniture_insta1.jpg";
import insta2 from "../../../../assets/images/furniture_insta2.jpg";
import insta3 from "../../../../assets/images/furniture_insta3.jpg";
import insta4 from "../../../../assets/images/furniture_insta4.jpg";
import insta5 from "../../../../assets/images/furniture_insta5.jpg";
import insta6 from "../../../../assets/images/furniture_insta6.jpg";
// logos
import logo1 from "../../../../assets/images/cl_logo1.png";
import logo2 from "../../../../assets/images/cl_logo2.png";
import logo3 from "../../../../assets/images/cl_logo3.png";
import logo4 from "../../../../assets/images/cl_logo4.png";
import logo5 from "../../../../assets/images/cl_logo5.png";
import logo6 from "../../../../assets/images/cl_logo6.png";



const TreadingCarosel =()=>{
    return(
        <>
        {/* treading carousel */}
             <div className="container">
             <div className='text-center'>
                  
                  <h1 className='pt-3'>Trending Items</h1>
                  <img src={redrow} className="img-fluid" width={100} alt="" />
              </div>
             <Swiper
                spaceBetween={1}
                centeredSlides={true}
                slidesPerView={4}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                loop={true}
                // effect={'fade'}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <div className=' container'>                   
                    <div className='row my-2'>
                   
                            <>
                                <div className='py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={item} class="img-fluid" alt="" /></div>
                                <div><h5>enim expedita sed</h5></div>
                                <div><span className="text-danger fw-bold">$ 45.00</span> <del>$55.25</del></div>
                                <div className="border d-flex text-center"><img src={star} class="img-fluid" alt="" />(21)</div>
                                </div>
                                </div>
                            </>
                     

                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className=' container'>                   
                    <div className='row my-2'>
                   
                            <>
                                <div className='py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={item1} class="img-fluid" alt="" /></div>
                                <div><h5>enim expedita sed</h5></div>
                                <div><span className="text-danger fw-bold">$ 45.00</span> <del>$55.25</del></div>
                                <div className="d-flex text-center"><img src={star} class="img-fluid" alt="" />(21)</div>
                                </div>
                                </div>
                            </>
                     

                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className=' container'>                   
                    <div className='row my-2'>
                   
                            <>
                                <div className='py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={item2} class="img-fluid" alt="" /></div>
                                <div><h5>enim expedita sed</h5></div>
                                <div><span className="text-danger fw-bold">$ 45.00</span> <del>$55.25</del></div>
                                <div className="border d-flex text-center"><img src={star} class="img-fluid" alt="" />(21)</div>
                                </div>
                                </div>
                            </>
                     

                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className=' container'>                   
                    <div className='row my-2'>
                   
                            <>
                                <div className='py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={item3} class="img-fluid" alt="" /></div>
                                <div><h5>enim expedita sed</h5></div>
                                <div><span className="text-danger fw-bold">$ 45.00</span> <del>$55.25</del></div>
                                <div className="border d-flex text-center"><img src={star} class="img-fluid" alt="" />(21)</div>
                                </div>
                                </div>
                            </>
                     

                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className=' container'>                   
                    <div className='row my-2'>
                   
                            <>
                                <div className='py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={item4} class="img-fluid" alt="" /></div>
                                <div><h5>enim expedita sed</h5></div>
                                <div><span className="text-danger fw-bold">$ 45.00</span> <del>$55.25</del></div>
                                <div className="border d-flex text-center"><img src={star} class="img-fluid" alt="" />(21)</div>
                                </div>
                                </div>
                            </>
                     

                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className=' container'>                   
                    <div className='row my-2'>
                   
                            <>
                                <div className='py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={item5} class="img-fluid" alt="" /></div>
                                <div><h5>enim expedita sed</h5></div>
                                <div><span className="text-danger fw-bold">$ 45.00</span> <del>$55.25</del></div>
                                <div className="border d-flex text-center"><img src={star} class="img-fluid" alt="" />(21)</div>
                                </div>
                                </div>
                            </>
                     

                </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className=''>
                    <div className='container'>
                    <div className=''>
                        <h4 className=''>Get up to 50% off Today Only!</h4>
                        <h1 className='heading'>Wooden Chair <br /> Collection</h1>
                        <button className='btn2 rounded-5 p-3'><b>SHOPE NOW</b></button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='container'>
                    <div className=''>
                        <h4 className=''>Taking your Viewing Experience to Next Level</h4>
                        <h1 className='heading'>Living Room <br /> Collection</h1>
                        <button className='btn2 rounded-5 p-3'><b>SHOPE NOW</b></button>
                    </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
             </div>
             {/* instagram Carosel */}
             <div>
             <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={6}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // effect={'fade'}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={insta1} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={insta2} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={insta3} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={insta4} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={insta5} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={insta6} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
            </Swiper>
             </div>
             {/* logos carousel */}
             <div className="container my-5">
             <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={5}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // effect={'fade'}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={logo1} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={logo2} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={logo3} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={logo4} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={logo5} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
                <SwiperSlide className=''>              
                    <div className='row my-2'>              
                                
                                <div className='rounded-3 text-center  '>
                                <img src={logo6} class="img-fluid" alt="" />
                                </div>               
                </div>
                </SwiperSlide>
            </Swiper>
             </div>
             
           
        </>
    )
};
export default TreadingCarosel;