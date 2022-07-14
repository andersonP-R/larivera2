import React from "react";
// parallax effect banner
import "./parallaxEffectAbout.css";

// reusable components
import { ContainerInicio } from "../inicio/inicioElements";
// styled-components
import { AboutSectionTwo } from "./acercaDeElements";
// images
import agricultor from "../../images/agricultor-1.jpg";

import { MainBanner } from "../Layout/MainBanner";
import { bannerDescripAcercaDe } from "../../data/acercaDeData";
import { SectionOne } from "./SectionOne";

// react-reveal

export const AcercaDe = () => {
  return (
    <ContainerInicio>
      <MainBanner
        img={agricultor}
        alt="agricultor"
        descrip={bannerDescripAcercaDe}
      />
      <SectionOne />
      <AboutSectionTwo>
        <div className="container-1">
          <div className="descript-1">
            <p>A description should be here</p>
          </div>
        </div>
        <div className="container-2">
          <div className="descript-2">
            <p>A description should be here</p>
          </div>
        </div>
        <div className="container-3">
          <div className="descript-3">
            <p>A description should be here</p>
          </div>
        </div>
      </AboutSectionTwo>
    </ContainerInicio>
  );
};
