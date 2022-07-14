import React from "react";
import { ImgContainer } from "../inicio/inicioElements";
import { motion } from "framer-motion";
import { variants } from "../variantsAnimation";

export const MainBanner = ({ img, alt, descrip }) => {
  return (
    <ImgContainer>
      <div>
        <img src={img} alt={alt} />
      </div>
      <motion.p
        initial="hidden"
        animate="show"
        variants={variants}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        {descrip}
      </motion.p>
    </ImgContainer>
  );
};
