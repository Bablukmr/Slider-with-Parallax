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
import { motion } from "framer-motion";

export default function Banner() {
const NextArrow=(props)=>{
  const {onClick}=props
  return(
    <div onClick={onClick} className=" leftArrow"><PiCaretLeftLight/></div>
  )
}
const PrevArrow=(props)=>{
  const {onClick}=props
  return(
  <div onClick={onClick} className="rightArrow"><PiCaretRightLight/></div>
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
      <motion.div  className="banner">
       <img src={img2} alt="IMG1" className="bannerimg"/>
       <BannerText title="The Adventure Begins" paragraph='Every adventure is a chance to learn, to grow, and to connect with the world in ways you never imagined. Whether your setting off on a solo backpacking expedition through rugged landscapes or embarking on a journey with friends and loved ones, the experiences that await are bound to leave an indelible mark on your soul.' />
      </motion.div >
      <div className="banner">
       <img src={img1} alt="IMG1" className="bannerimg"/>
       <BannerText title="Exploring New Horizons" paragraph="With each step you take into uncharted territory, you'll encounter a tapestry of cultures, landscapes, and ideas that will enrich your understanding of the world. From the bustling streets of foreign cities to the serene solitude of remote natural wonders,"/>
      </div>
      <div className="banner">
       <img src={img3} alt="IMG1" className="bannerimg"/>
       <BannerText title="TitChasing Dreamsle" paragraph="Chasing dreams is not a linear path; it's a winding road filled with ups and downs. There will be moments of doubt, setbacks, and challenges that test your resolve. Yet, it's precisely these moments that shape your character and reveal your strength."/>
      </div>
      
    </Slider>
    </div>
  )
}
