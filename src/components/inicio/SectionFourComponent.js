import React from "react";

import { SectionFour } from "./inicioElements";
import tasa from "../../images/tasa-caffe-2.jpg";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  sectionFourVariants,
  sectionFourVariantsImg,
} from "../variantsAnimation";

export const SectionFourComponent = () => {
  const [element, controls] = useScroll();
  return (
    <SectionFour ref={element}>
      <motion.div
        animate={controls}
        variants={sectionFourVariantsImg}
        transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
      >
        <img src={tasa} alt="cafe" />
      </motion.div>
      <motion.div
        animate={controls}
        variants={sectionFourVariants}
        transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
      >
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
      </motion.div>
    </SectionFour>
  );
};
