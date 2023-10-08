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



const ExclusiveProducts = () => {
    const card = [
        {
            immageUrl: item,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",
        },
        {
            immageUrl: item1,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",


        }, {
            immageUrl: item2,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",

        }, {
            immageUrl: item3,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            immageUrl: item4,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            immageUrl: item5,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            immageUrl: item6,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
            star: star,
            Paragraph: "(21)",

        },
        {
            immageUrl: item7,
            heading: "enim expedita sed ",
            Catagry: "$ 45.00",
            del: "$55.25",
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
                                <div className='col-md-3 py-2'>
                                    <div className='border rounded-3 text-center  '>
                                <div><img src={data.immageUrl} class="img-fluid" alt="" /></div>
                                <div><h5>{data.heading}</h5></div>
                                <div><span className="text-danger fw-bold">{data.Catagry}</span> <del>{data.del}</del></div>
                                <div><img src={data.star} class="img-fluid" alt="" /> {data.Paragraph} </div>
                                </div>
                                </div>
                            </>
                        );

                    })}

                </div>
                <div className="row my-5">
                    <div className="col-md-5 position-relative">
                        <img src={baner1} className="img-fluid" alt="" />
                        <div className="p-5 position-absolute top-0 start-0">
                            <h5>Super Sale</h5>
                            <h1 className="fw-bold">New Collection</h1>
                            <span>Shop Now</span>
                        </div>
                    </div>
                    <div className="col-md-7 position-relative">
                        <img src={baner2} className="img-fluid" alt="" />
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
export default ExclusiveProducts ;
