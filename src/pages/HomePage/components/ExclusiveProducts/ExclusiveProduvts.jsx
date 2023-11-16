import item from "../../../../assets/images/furniture_img1.jpg";
import item1 from "../../../../assets/images/furniture_img2.jpg";
import item2 from "../../../../assets/images/furniture_img3.jpg";
import item3 from "../../../../assets/images/furniture_img4.jpg";
import item4 from "../../../../assets/images/furniture_img5.jpg";
import item5 from "../../../../assets/images/furniture_img6.jpg";
import item6 from "../../../../assets/images/furniture_img7.jpg";
import item7 from "../../../../assets/images/furniture_img8.jpg";
import star from "../../../../assets/images/stars7.svg";
import redrow from "../../../../assets/images/redRow.svg";
import baner1 from "../../../../assets/images/furniture_banner1.jpg";
import baner2 from "../../../../assets/images/furniture_banner2.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../../../functins/functions";
import { Link } from "react-router-dom";



const ExclusiveProducts = () => {

    const dispatch = useDispatch();
    const addCartHandeler = (date) => {
 
        // console.log(date);
        dispatch(addItem(date));
    }
    const card = [
        {
            id: 13,
            pic: item,
            title: "enim expedita sed ",
            PRate: "$ 45.00",
            ORate: "$55.25",
            star: star,
            Paragraph: "(21)",
        },
        {
            id: 14,
            pic: item1,
            title: "Adipisci Officia Libero",
            PRate: "$ 55.00",
            ORate: "$95.25",
            star: star,
            Paragraph: "(21)",


        },
        {
            id: 15,
            pic: item2,
            title: "Internet Tend To Repeat",
            PRate: "$ 68.00",
            ORate: "$99.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            id: 16,
            pic: item3,
            title: "Many Desktop Publishing",
            PRate: "$ 69.00",
            ORate: "$89.00",
            star: star,
            Paragraph: "(21)",

        },
        {
            id: 17,
            pic: item4,
            title: "Injected Humour Repetition",
            PRate: "$ 45.00",
            ORate: "$55.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            id: 18,
            pic: item5,
            title: "Randomised Humour Words",
            PRate: "$ 55.00",
            ORate: "$95.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            id: 19,
            pic: item6,
            title: "Expedita Distinctio Rerum",
            PRate: "$ 68.00",
            ORate: "$99.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            id: 20,
            pic: item7,
            title: "Itaque Earum Rerum",
            PRate: "$ 69.00",
            ORate: "$89.25",
            star: star,
            Paragraph: "(21)",

        },
    ]
    return (
        <>
            <div className='container mt-5'>
                <div className='text-center'>
                    <h1 className='pt-3'>Exclusive Products</h1>
                    <img src={redrow} className="img-fluid" width={100} alt="" />
                </div>

                <div className='row my-2'>
                    {card.map((data) => {
                        return (
                            <>
                                <div onClick={() => { addCartHandeler(data) }} className='col-md-3 py-2'>
                                    <div className='border rounded-3 text-center  '>
                                        <Link to="/ProductDetail">  <div><img src={data.pic} class="img-fluid" alt="" /></div> </Link>
                                        <div><h5>{data.title}</h5></div>
                                        <div><span className="text-danger fw-bold">{data.PRate}</span> <del>{data.ORate}</del></div>
                                        <div><img src={data.star} class="img-fluid" alt="" /> {data.Paragraph} </div>
                                        <button className="p-2 my-1 bg-danger border-0 rounded-1 text-white" onClick={() => { addCartHandeler(data)}}><b>ADD TO CART</b></button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="row my-5">
                    <div className="col-md-5 position-relative">
                        <img src={baner1} className="img-fluid form-control p-0 border-0 rounded-0" alt="" />
                        <div className="p-5 position-absolute top-0 start-0">
                            <h5>Super Sale</h5>
                            <h1 className="fw-bold">New Collection</h1>
                            <span>Shop Now</span>
                        </div>
                    </div>
                    <div className="col-md-7 position-relative">
                        <img src={baner2} className="img-fluid form-control p-0 border-0 rounded-0" alt="" />
                        <div className="p-5 position-absolute top-50 start-0 translate-middle-y">
                            <h1 className="fw-bold">New Season</h1>
                            <h3>Sale 40% Off</h3>
                            <span>Shop Now</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ExclusiveProducts;
