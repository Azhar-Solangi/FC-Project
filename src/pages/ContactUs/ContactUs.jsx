import React from "react";
import ShopFooter from "../ShopList/components/footer/footer";
// images
import addressicon from "../../assets/images/icons/addressIcon.svg"
import emailicon from "../../assets/images/icons/emaiIcon.svg"
import phonicon from "../../assets/images/icons/phoneIcon.svg"


const ContactUs = () => {
    return (
        <>
            <div className="bg-light text-black py-2 mb-5  ">
                <div className="container  py-4">
                    <div className="d-flex my-4 ">
                        <div className="me-auto ">
                            <h2><b>Contact</b></h2>
                        </div>
                        <div className="justify-content-end gap-2 d-flex">
                            <div>Home ➢ </div>
                            <div>Pages ➢ </div>
                            <div className="text-dark">Contact</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex py-5">
                    <div className="col-md-4">
                       <div className="border text-center p-4 rounded-4 mt-3 shadow ">
                        <img src={addressicon} alt="" />
                        <h5><b>Address</b></h5>
                        <p>123 Street, Old Trafford, London, UK</p>
                       </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border text-center p-4 rounded-4 mt-3 shadow">
                        <img src={emailicon} alt="" />
                        <h5><b>Email Address</b></h5>
                        <p>info@yourmail.com</p>
                       </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border text-center p-4 rounded-4 mt-3 shadow">
                        <img src={phonicon} alt="" />
                        <h5><b>Phone</b></h5>
                        <p>+ 457 789 789 65</p>
                       </div>
                    </div>
                </div>
                <div className="row d-flex my-5">
                    <div className="col-md-6  my-5">
                        <div>
                            <h1><b>Get In Touch</b></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        <form   action="https://formspree.io/f/mpzgkbjn" method="POST">
                            <div className="row">
                                <div className="col-md-6">    
                            <input name="name"  className="mb-3 p-2 px-4 rounded-2 form-control" type="text" placeholder="Enter Name *" required />                        
                            <input name="phone-number"  className="mb-3 p-2 px-4 rounded-2 form-control btn-lg" type="text" placeholder="Enter Phone No.*" required /> 
                            </div>
                            <div className="col-md-6">
                            <input name="email"  className="mb-3 p-2 px-4 rounded-2 form-control" type="email" placeholder="Enter Email *" required />
                            <input name="subject"  className="mb-3 p-2 px-4 rounded-2 form-control" type="text" placeholder="Enter Subject *" required />
                            </div>
                            </div>
                            <textarea  className="form-control" required placeholder="Message *" name="message" id="" rows="5"></textarea> <br />
                            <button className="mt-2 py-2 px-5 rounded-2 bg-danger border-0 " type="submit">Send Message</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-6 my-5">
                        <div className="">
<iframe className="col-md-12 form-control border-0 p-0" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3535.5401582014433!2d68.66244507525934!3d27.60778272987627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM2JzI4LjAiTiA2OMKwMzknNTQuMSJF!5e0!3m2!1sen!2s!4v1696958567739!5m2!1sen!2s"  height="480" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            {/* Footeer */}
            <ShopFooter />
        </>
    )
};

export default ContactUs;