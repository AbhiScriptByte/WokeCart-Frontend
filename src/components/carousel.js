import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiER0fImvGmDkX1DlK-WLtqjlbzgY2le6GgvKp2uJc-FHQjEXytJXSgzlnuBFYNZPwmwPWU579qaL7s9_h_VDaUC7H8EzbbMrvX3nvJIkAwGSsJpRjAB5DoLd3o77Cu0EZcQuPnjEBdIV8-H_oWfu3e_vLIMGaLSyWQtg9DjqdW0Jvs2iG9cA-f9rreGtk/s1920/banner-1.jpg"
            alt="Banner 1"
            className="w-full"
          />
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <p className="text-white text-lg">Get 20% OFF</p>
            <a href="/shop">
            <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSLTZxM_S8GubMctQuZmjDKFpZSguFies98CIlqUZMkZMeSw1EqY1KM1dCQvoTgGs3_7saBnq9kHQ7HD0xP9RYwRcf-9ErqAdkeUF-j6NAe5n-VGdFXYJjJLYlBGi1N2xoBG62W3WynVM2I-59PHEStruQNdqusmoVNvUkT7bYbs9eLDV6k_MT3Zjs4Dk/s1920/banner-2.jpg"
            alt="Banner 2"
            className="w-full"
          />
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <p className="text-white text-lg">Limited Time Offer</p>
            <a href="/shop">
            <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEbZbJdcstUU3bMx17fLJ2c1K49SV_dbMXXEbPWoM2k7KuRet8S6lRVDqki_pMqkSXPsWcRBlpqY4jG1mHtVUGCndHAyBTIwyrH6XvcOTtMwcXB15c5XJNcRiirlqBBe0YipZJiEKLuT_BKwkJ9j7RFy9CcukkkEDnPPiNn6mgEoPE8OQI2J9r4iZ1c9w/s1920/banner-3.jpg"
            alt="Banner 3"
            className="w-full"
          />
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <p className="text-white text-lg">Sale Up to 50% OFF</p>
            <a href="/shop">
            <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
