import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
import { Card } from "react-bootstrap";
import img from './1 (2).png'



const Testimonial = () => {
    const sliderRef = useRef(null)
    const settings = {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className="container-fluid mt-5" >
            <h2 className="text-center testimonial">Testimonial</h2>
            <div style={{ margin: 40 }} >
                <Slider
                    ref={sliderRef}
                    {...settings}
                >
                    {
                        Array(10).fill('').map(() => (

                            < div style={{ margin: 20 }}>
                                <Card style={{ height: "220px", marginLeft: "60px" }}>
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <img className="ms-5 mt-4" width='210' src={img} alt="" />
                                        <div>
                                            <h2  >
                                                Customer <br />
                                                <br />
                                                hello
                                            </h2>
                                        </div>
                                    </span>
                                    <Card.Body></Card.Body>
                                </Card>
                            </div>

                        ))
                    }
                </Slider>
            </div >
            <div className="d-flex justify-content-center">
                <div>
                    <svg onClick={() => sliderRef.current.slickPrev()}
                        style={{ height: 60, fill: "white", background: "#644F9C", borderRadius: "100px", marginRight: "80px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" /></svg>
                </div>
                <div>
                    <svg onClick={() => sliderRef.current.slickNext()} style={{ height: 60, fill: "white", background: "#644F9C", borderRadius: "100px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" /></svg>

                </div>
            </div>

        </div >

    );
};

export default Testimonial;