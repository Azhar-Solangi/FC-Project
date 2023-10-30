import React from "react";
import check from '../../assets/images/chechbtn.svg'
import addcart from '../../assets/images/addCart.svg'
import iconsall from '../../assets/images/iconsall.svg'
import star from '../../assets/images/stars7.svg'
import thamnail from '../../assets/images/thumnail.svg'
import list from '../../assets/images/list.svg'
import ShopFooter from "./components/footer/footer";
// cards Images 
import pic1 from '../../assets/images/product_img1.jpg'
import pic2 from '../../assets/images/product_img2.jpg'
import pic3 from '../../assets/images/product_img3.jpg'
import pic4 from '../../assets/images/product_img4.jpg'
import pic5 from '../../assets/images/product_img5.jpg'
import pic6 from '../../assets/images/product_img6.jpg'
import pic7 from '../../assets/images/product_img7.jpg'
import pic8 from '../../assets/images/product_img8.jpg'
import pic9 from '../../assets/images/product_img9.jpg'
import pic10 from '../../assets/images/product_img10.jpg'
import pic11 from '../../assets/images/product_img11.jpg'
import pic12 from '../../assets/images/product_img12.jpg'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../functins/functions";



const ShopList = () => {

    const dispatch = useDispatch();
    const addCartHandeler = (date) => {
        // console.log(date);
        dispatch(addItem(date));
    }
    const card = [
        {
            id: 1,
            pic: pic1,
            title: "Blue Dress For Woman",
            PRate: "$45.00",
            ORate: "$55.25",
            OffPercent: "35% Of",
            rating: "(21)",
        },
        {
            id: 2,
            pic: pic2,
            title: "Lether Gray Tuxedo",
            PRate: "$55.00",
            ORate: "$95.00",
            OffPercent: "25% Off",
            rating: "(15)",
        },
        {
            id: 3,
            pic: pic3,
            title: "Woman Full Sliv Dress",
            PRate: "$68.00",
            ORate: "$99.25",
            OffPercent: "",
            rating: "(25)",
        },
        {
            id: 4,
            pic: pic4,
            title: "Light Blue Shirt",
            PRate: "$69.00",
            ORate: "$89.00",
            OffPercent: "20% Of",
            rating: "(22)",
        },
        {
            id: 5,
            pic: pic5,
            title: "Blue Dress For Woman",
            PRate: "$45.00",
            ORate: "$55.25",
            OffPercent: "35% Of",
            rating: "(21)",
        },
        {
            id: 6,
            pic: pic6,
            title: "Blue Casual Check Shirt",
            PRate: "$55.00",
            ORate: "$95.00",
            OffPercent: "25% Of",
            rating: "(15)",
        },
        {
            id: 7,
            pic: pic7,
            title: "White Black Line Dress",
            PRate: "$68.00",
            ORate: "$99.00",
            OffPercent: "20% Of",
            rating: "(25)",
        },
        {
            id: 8,
            pic: pic8,
            title: "Men Blue Jins Shirt",
            PRate: "$69.00",
            ORate: "$89.00",
            OffPercent: "20% Of",
            rating: "(22)",
        },
        {
            id: 9,
            pic: pic9,
            title: "T-Shirt Form Girls",
            PRate: "$45.00",
            ORate: "$55.25",
            OffPercent: "35% Of",
            rating: "(21)",
        },
        {
            id: 10,
            pic: pic10,
            title: "Red & Black Check Shirt",
            PRate: "$55.00",
            ORate: "$95.00",
            OffPercent: "25% Of",
            rating: "(15)",
        },
        {
            id: 11,
            pic: pic11,
            title: "Black Dress For Woman",
            PRate: "$68.00",
            ORate: "$99.00",
            OffPercent: "20% Of",
            rating: "(25)",
        },
        {
            id: 12,
            pic: pic12,
            title: "Black T-Shirt For Woman",
            PRate: "$68.00",
            ORate: "$99.00",
            OffPercent: "20% Of",
            rating: "(25)",
        },
    ];
    return (
        <>
            <div className="bg-light text-black py-2 mb-5  ">
                <div className="container  py-4">
                    <div className="d-flex my-4 ">
                        <div className="me-auto ">
                            <h2><b>Shop List</b></h2>
                        </div>
                        <div className="justify-content-end gap-2 d-flex">
                            <div>Home ➢ </div>
                            <div>Pages ➢ </div>
                            <div className="text-dark">Shop List</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="d-flex my-4">
                    <div className="me-auto ">
                        <select className="p-3" name="" id="">
                            <option value="">Default sorting</option>t
                            <option value="">Sort by popularity</option>t
                            <option value="">Sort by newness</option>t
                            <option value="">Sort by price:low to high</option>t
                            <option value="">Sort by price:high to low</option>t
                        </select>
                    </div>
                    <div className="justify-content-end gap-2 d-flex">
                        <div> <img height={53} src={thamnail} alt="" /></div>
                        <div><img height={53} src={list} alt="" /></div>
                        <div>  <select className="p-3" name="" id="">
                            <option value="">Showing</option>
                            <option value="">9</option>
                            <option value="">12</option>
                            <option value="">18</option>
                        </select> </div>
                    </div>
                </div>
                {/*12 Cards Mape */}
                {card.map((item) => {
                    return (
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img height={300} src={item.pic} class="rounded-start img-fluid" alt="..." />
                                </div>
                                <div class="col-md-9">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <div className="d-flex ">
                                            <div className="me-auto"><b className="text-danger">{item.PRate}</b><del className="ps-2">{item.ORate}</del><span className="ps-2 text-success">{item.OffPercent}</span></div>
                                            <div className="justify-content-end"><img src={star} className="imh-fluid" alt="" />{item.rating}</div>
                                        </div>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc</p>
                                        <span>
                                            <input type="radio" className="form-check-input bg-black p-3" name="color" id="color1" />
                                            <input type="radio" className="form-check-input bg-danger p-3 ms-2" name="color" id="color1" />
                                            <input type="radio" className="form-check-input bg-secondary p-3 ms-2" name="color" id="color1" />
                                        </span>
                                        <div className="pt-2"><button onClick={() => { addCartHandeler(item) }} className="border-0 bg-white"><img src={addcart} className="imh-fluid" alt="" /></button><a href=""><span><img src={iconsall} className="imh-fluid" alt="" /></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container">
                <div className="d-flex justify-content-center my-5 gap-2 ">
                    <button className="p-2 px-3 text-white bg-danger ">1</button>
                    <button className="p-2 px-3">2</button>
                    <button className="p-2 px-3">3</button>
                    <button className="p-2 px-3"> ➜ </button>
                </div>
            </div>
            {/* Footer Start */}
            <ShopFooter />
        </>
    )
};
export default ShopList;