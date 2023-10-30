import React from "react";
// images
import star from '../../assets/images/stars7.svg'
import addcart from '../../assets/images/addCart.svg'
import iconsall from '../../assets/images/iconsall.svg'
import { useDispatch, useSelector } from "react-redux";
import ShopFooter from "../ShopList/components/footer/footer";
import { addItem, decreaseQuantity, increaseQuantity, removeItem } from "../functins/functions";


export const ProductDetail = () => {

    const { items } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const addCartHandeler = (date) => {
        // console.log(date);
        dispatch(addItem(date));
    }
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
            {items.map((data) => {
                return (
                    <div className="container">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img height={300} src={data.pic} class="rounded-start img-fluid" alt="..." />
                                </div>
                                <div class="col-md-9">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <div className="d-flex ">
                                            <div className="me-auto"><b className="text-danger">{data.PRate}</b><del className="ps-2">{data.ORate}</del><span className="ps-2 text-success">{data.OffPercent}</span></div>
                                            <div className="justify-content-end"><img src={star} className="imh-fluid" alt="" />{data.rating}</div>
                                        </div>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc</p>
                                        <span>
                                            <input type="radio" className="form-check-input bg-black p-3" name="color" id="color1" />
                                            <input type="radio" className="form-check-input bg-danger p-3 ms-2" name="color" id="color1" />
                                            <input type="radio" className="form-check-input bg-secondary p-3 ms-2" name="color" id="color1" />
                                        </span>
                                        <div className="d-flex mt-2">
                                            <button className="rounded-2 p-2 bg-primary" onClick={() => decreaseIQuantityHandler(data)}>-</button>
                                            <span className="p-2">{data.Quantity}</span>
                                            <button className="rounded-2 p-2 bg-primary" onClick={() => increaseIQuantityHandler(data)}>+</button>
                                        </div>
                                        <div className="pt-2"><button onClick={() => { addCartHandeler(data) }} className="border-0 bg-white"><img src={addcart} className="imh-fluid" alt="" /></button><a href=""><span><img src={iconsall} className="imh-fluid" alt="" /></span></a></div>
                                        <div className="text-center"> <button className="rounded-2 p-2 px-4 bg-black text-white" onClick={() => removItemHandler(data)}>Remove</button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <ShopFooter />
        </>
    )
}