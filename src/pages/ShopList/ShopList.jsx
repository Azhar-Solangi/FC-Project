import React from "react";
import pic1 from '../../assets/images/product_img1.jpg'
import check from '../../assets/images/chechbtn.svg'
import addcart from '../../assets/images/addCart.svg'
import iconsall from '../../assets/images/iconsall.svg'
import star from '../../assets/images/stars7.svg'




const ShopList = () => {
    return (
        <>
        <div className="container">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-3">
                        <img height={300} src={pic1}  class="rounded-start img-fluid" alt="..." />
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Blue Dress For Woman</h5>
                            <div className="d-flex ">
                            <div className="me-auto"><b className="text-danger">$45.00</b><del className="ps-2">$55.25</del><span className="ps-2 text-success">35% Of</span></div>
                            <div className="justify-content-end"><img src={star} className="imh-fluid" alt="" />(21)</div>
                            </div>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc</p>
                            <span><img src={check} className="imh-fluid" alt="" /></span>
                            <div className="pt-2"><a href=""><span><img src={addcart} className="imh-fluid" alt="" /></span></a><a href=""><span><img src={iconsall} className="imh-fluid" alt="" /></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};
export default ShopList;