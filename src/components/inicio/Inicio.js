import React from "react";
import {
  ContainerInicio,
  SectionFive,
  SectionOne,
  SectionTwo,
} from "./inicioElements";

import { LaRiveraLink } from "../Layout/footer/footerElements";

import Tasa from "../../images/cafe-gif.gif";
import { MainBanner } from "../Layout/MainBanner";
import { bannerDescripInicio } from "../../data/inicioData";

import { FaEnvira, FaSolarPanel, FaTractor } from "react-icons/fa";
import { IconContext } from "react-icons";

import { motion } from "framer-motion";
import { sectionOne } from "../variantsAnimation";
import { useScroll } from "../useScroll";

// parallax effect
import "./parallaxEffect.css";

import { SectionThreeComponet } from "./SectionThreeComponet";
import { SectionFourComponent } from "./SectionFourComponent";

export const Inicio = () => {
  const [element, controls] = useScroll();
  return (
    <ContainerInicio>
      <MainBanner img={Tasa} alt="Tasa-café" descrip={bannerDescripInicio} />
      <SectionOne ref={element}>
        <IconContext.Provider
          value={{ style: { fontSize: "4.2em", color: "#0e4a67" } }}
        >
          <motion.div
            animate={controls}
            variants={sectionOne}
            transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          >
            <div>
              <FaEnvira />
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever a type specimen book.
              </p>
            </div>
            <div>
              <FaSolarPanel />
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since type specimen book.
              </p>
            </div>
            <div>
              <FaTractor />
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the ype specimen book.
              </p>
            </div>
          </motion.div>
        </IconContext.Provider>
      </SectionOne>
      <SectionTwo>
        <div className="sectionContainer">
          <div className="container">
            <p>A description should be here</p>

            <LaRiveraLink to="/acerca-de">Ir a Acerca de</LaRiveraLink>
          </div>
        </div>
      </SectionTwo>
      <SectionThreeComponet />
      <SectionFourComponent />
      <SectionFive>
        <div className="subSectionFive">
          <div className="subSectionFiveContainer">
            <p>A description should be here</p>

            <LaRiveraLink to="/contacto">Ir a Contacto</LaRiveraLink>
          </div>
        </div>
      </SectionFive>
      <SectionFive>
        <div className="subSectionFive__2">
          <div className="subSectionFiveContainer__2">
            <p>A description should be here</p>
          </div>
        </div>
      </SectionFive>
    </ContainerInicio>
  );
};
