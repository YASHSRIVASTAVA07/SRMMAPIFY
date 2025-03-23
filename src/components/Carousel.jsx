import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-yellow-400 transition-colors z-10"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-yellow-400 transition-colors z-10"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-3 mt-4">
          {dots.map((dot, index) => (
            <li key={index} className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity">
              {dot.props.children}
            </li>
          ))}
        </ul>
      </div>
    )
  };

  const images = [
    "https://source.unsplash.com/1200x600/?college,building",
    "https://source.unsplash.com/1200x600/?university,campus",
    "https://source.unsplash.com/1200x600/?students,event"
  ];

  return (
    <div className="relative max-w-6xl mx-auto mt-12">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
