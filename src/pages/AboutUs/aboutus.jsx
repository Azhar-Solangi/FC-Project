import React from "react";
import ShopFooter from "../ShopList/components/footer/footer";


// images
import about from '../../assets/images/about_img.jpg';
import creatIcon from '../../assets/images/icons/create.svg'
import layoutIcon from '../../assets/images/icons/layout.svg';
import marketIcon from '../../assets/images/icons/market.svg';
import truckIcon from '../../assets/images/icons/truckB.svg';
import moneyIcon from '../../assets/images/icons/moneyReternB.png';
import servicetIcon from '../../assets/images/icons/24B.svg';
// team
import teamM1 from '../../assets/images/team_img1.jpg';
import teamM2 from '../../assets/images/team_img2.jpg';
import teamM3 from '../../assets/images/team_img3.jpg';
import teamM4 from '../../assets/images/team_img4.jpg';
// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// images users
import user1 from '../../assets/images/user_img1.jpg';
import user2 from '../../assets/images/user_img2.jpg';
import user3 from '../../assets/images/user_img3.jpg';
import user4 from '../../assets/images/user_img4.jpg';

const AboutUs = () => {
    return (
        <>
            <div className="bg-light text-black py-2 mb-5 ">
                <div className="container  py-4">
                    <div className="d-flex my-4 ">
                        <div className="me-auto ">
                            <h2><b>About Us</b></h2>
                        </div>
                        <div className="justify-content-end gap-2 d-flex">
                            <div>Home ➢ </div>
                            <div>Pages ➢ </div>
                            <div className="text-dark">About</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={about} className="img-fluid" alt="About Image comming soon" />
                    </div>
                    <div className="col-md-7">
                        <div className="container py-5">
                            <h1><b>Who We Are</b></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> consequuntur quibusdam enim expedita sed nesciunt incidunt <br /> accusamus adipisci officia libero laboriosam!</p>
                            <p>Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id <br /> elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. <br /> Duis sed odio sit amet nibh vultate cursus a sit amet mauris.</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* Why Chose Us */}
            <div className="bg-success-subtle py-5">
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h1><b>Why Choose Us?</b></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className="col-md-4 ">
                            <div className="bg-white text-center p-4 mt-3">
                                <img className="p-2" src={creatIcon} alt="pic" />
                                <h5><b>Creative Design</b></h5>
                                <p>There are many variations of passages <br /> of Lorem Ipsum available, but the <br /> majority have suffered alteration in <br /> some form</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white text-center p-4 mt-3">
                                <img className="p-2" src={layoutIcon} alt="pic" />
                                <h5><b>Flexible Layouts</b></h5>
                                <p>There are many variations of passages <br /> of Lorem Ipsum available, but the <br /> majority have suffered alteration in <br /> some form</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white text-center p-4 mt-3">
                                <img className="p-2" src={marketIcon} alt="pic" />
                                <h5><b>Email Marketing</b></h5>
                                <p>There are many variations of passages <br /> of Lorem Ipsum available, but the <br /> majority have suffered alteration in <br /> some form</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Our Team Members */}
            <div className="">
                <div className="container">
                    <div className="row py-5">
                        <div className="text-center">
                            <h1><b>Our Team Members</b></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className="col-md-3">
                            <div className="py-4">
                                <div className="text-center">
                                    <img src={teamM1} className="img-fluid  form-control border-0 p-0 rounded-0" alt="pic" />
                                </div>
                                <h5 className="pt-2"><b>John Muniz</b></h5>
                                <p>Project Engineer</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="py-4">
                                <div className="text-center">
                                    <img src={teamM2} className="img-fluid form-control border-0 p-0 rounded-0" alt="pic" />
                                </div>
                                <h5 className="pt-2"><b>Alea Brooks</b></h5>
                                <p>Graphics Designer</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="py-4">
                                <div className="text-center">
                                    <img src={teamM3} className="img-fluid form-control border-0 p-0 rounded-0" alt="pic" />
                                </div>
                                <h5 className="pt-2"><b>Anders Glick</b></h5>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="py-4">
                                <div className="text-center">
                                    <img src={teamM4} className="img-fluid form-control border-0 p-0 rounded-0" alt="pic" />
                                </div>
                                <h5 className="pt-2"><b>Richard Tice</b></h5>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Carousel  */}
            <div className="bg-danger-subtle">
                <div className="container py-5">
                    <h1 className="text-center py-4"><b>Our Client Say!</b></h1>
                    <div className="container">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis <br /> consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus <br /> perferendis possimus quasi sint sit tempora voluptatem.</p>
                                <div className="d-flex justify-content-center py-4 text-center">
                                    <img src={user1} width={50} className="" alt="pic" />
                                    <div className="px-3 text-start"><h6>Lissa Castro</h6><span className="text-danger">Designer</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis <br /> consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus <br /> perferendis possimus quasi sint sit tempora voluptatem.</p>
                                <div className="d-flex justify-content-center py-4 text-center">
                                    <img src={user2} width={50} className="" alt="pic" />
                                    <div className="px-3 text-start"><h6>Aldin Smith</h6><span className="text-danger">Designer</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis <br /> consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus <br /> perferendis possimus quasi sint sit tempora voluptatem.</p>
                                <div className="d-flex justify-content-center py-4 text-center">
                                    <img src={user3} width={50} className="" alt="pic" />
                                    <div className="px-3 text-start"><h6>Daisy Lana</h6><span className="text-danger">Designer</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis <br /> consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus <br /> perferendis possimus quasi sint sit tempora voluptatem.</p>
                                <div className="d-flex justify-content-center py-4 text-center">
                                    <img src={user4} width={50} className="" alt="pic" />
                                    <div className="px-3 text-start"><h6>John Becker</h6><span className="text-danger">Designer</span></div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
            {/* feartures */}
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-4 text-center border-end">
                        <img src={truckIcon} className="img-fluid"  alt="pic" />
                        <h5><b>Free Delivery</b></h5>
                        <p>If you are going to use of Lorem, you <br /> need to be sure there anything</p>
                    </div>
                    <div className="col-md-4 text-center border-end">
                        <img src={moneyIcon} className="img-fluid"  alt="pic" />
                        <h5><b>30 Day Return</b></h5>
                        <p>If you are going to use of Lorem, you <br /> need to be sure there anything</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={servicetIcon} className="img-fluid"  alt="pic" />
                        <h5><b>27/4 Support</b></h5>
                        <p>If you are going to use of Lorem, you <br /> need to be sure there anything</p>
                    </div>
                </div>
            </div>

            <ShopFooter />
        </>
    )
};
export default AboutUs;
