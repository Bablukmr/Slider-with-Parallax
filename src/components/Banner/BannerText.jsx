import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

function BannerText({ title }) {
  return (
    <div className="bannertext">
      <div className="container">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="titletext"
        >
          {title}
        </motion.h2>
        <motion.p  initial={{ y: 60, opacity: .3 }}
          whileInView={{ y: 10, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="paragraph" >
          Manage school events, the practice schedule, dentist appointments,
          vacations—whatever you need!
        </motion.p>
        <motion.div initial={{ y: 60, opacity: .3 }}
          whileInView={{ y: 30, opacity: 1 }}
          transition={{ duration:1 }} className="banner_btn">
          <button className="btn">Explore</button>
          <button className="btn">Contact</button>
        </motion.div>
      </div>
    </div>
  );
}

export default BannerText;
