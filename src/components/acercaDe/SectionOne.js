import React from "react";
import { AboutSectionOne } from "./acercaDeElements";
import agricultor_2 from "../../images/agricultor-2.png";
// parallax effect banner
import "./parallaxEffectAbout.css";
// react-icons
import { FaAward, FaCheckDouble } from "react-icons/fa";

// animation
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  sectionOneAcercaVatiants,
  sectionOneAcercaVatiantsImg,
} from "../variantsAnimation";

export const SectionOne = () => {
  const [element, controls] = useScroll();
  return (
    <AboutSectionOne ref={element}>
      <motion.div
        className="imageContainer"
        animate={controls}
        variants={sectionOneAcercaVatiantsImg}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <img src={agricultor_2} alt="agricultor-2" />
      </motion.div>
      <motion.div
        className="descriptionContainer"
        animate={controls}
        variants={sectionOneAcercaVatiants}
        transition={{ delay: 0.1, duration: 0.6, type: "tween" }}
      >
        {/* abstraer estos parrafos */}
        <div>
          <FaCheckDouble />
          <p>
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>
        <div>
          <FaCheckDouble />
          <p>
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>
        <div>
          <FaCheckDouble />
          <p>
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>
        <div>
          <FaAward />
          <p>
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>
        <div>
          <FaAward />
          <p>
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>
        <div>
          <FaAward />
          <p>
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>
      </motion.div>
    </AboutSectionOne>
  );
};
