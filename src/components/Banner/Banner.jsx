import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './Banner.css'
import { PiCaretLeftLight,PiCaretRightLight } from "react-icons/pi";
import img1 from '../../images/bannerone.jpg'
import img2 from '../../images/bannertwo.jpg'
import img3 from '../../images/bannerthree.jpg'
import Slider from 'react-slick';
import BannerText from "./BannerText";

export default function Banner() {
const NextArrow=(props)=>{
  const {onclick}=props
  return(
    <div><PiCaretRightLight/></div>
  )
}
const PrevArrow=(props)=>{
  const {onclick}=props
  return(
  <div><PiCaretLeftLight/></div>
  )
}
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,

  };
  return (
    <div className="maindiv">
       <Slider {...settings}>
      <div className="banner">
       <img src={img1} alt="IMG1" className="bannerimg"/>
       <BannerText title="Title"/>
      </div>
      
    </Slider>
    </div>
  )
}
