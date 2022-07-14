import React from "react";
import { SectionThree } from "./inicioElements";
import tasa from "../../images/tasa-caffe-2.jpg";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  sectionThreeVariants,
  sectionThreeVariantsImg,
} from "../variantsAnimation";

export const SectionThreeComponet = () => {
  const [element, controls] = useScroll();
  return (
    <SectionThree ref={element}>
      <motion.div
        animate={controls}
        variants={sectionThreeVariants}
        transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
      >
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type in
        </p>
      </motion.div>
      <motion.div
        animate={controls}
        variants={sectionThreeVariantsImg}
        transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
      >
        <img src={tasa} alt="cafe" />
      </motion.div>
    </SectionThree>
  );
};
