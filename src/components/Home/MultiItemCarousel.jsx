import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselIcon from "./CarouselIcon";
import {topMeels} from "./topMeels"; 
const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
      };
    
  return (
    <div>
      <div>
        <Slider {...settings}>
          {topMeels.map((item) => (
            <CarouselIcon image={item.image} title={item.title} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultiItemCarousel;
