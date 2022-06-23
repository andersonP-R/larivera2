import React from "react";
import {
  ContainerInicio,
  ImgContainer,
  SectionFive,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./inicioElements";

import { LaRiveraLink } from "../Layout/footer/footerElements";

import finca_1 from "../../images/finca-1.jpg";
import tasa from "../../images/tasa-caffe-2.jpg";
import { FaEnvira, FaSolarPanel, FaTractor } from "react-icons/fa";
import { IconContext } from "react-icons";

// parallax effect
import "./parallaxEffect.css";

export const Inicio = () => {
  return (
    <ContainerInicio>
      <ImgContainer>
        <div>
          <img src={finca_1} alt="finca" />
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ImgContainer>
      <SectionOne>
        <IconContext.Provider
          value={{ style: { fontSize: "4.2em", color: "#0e4a67" } }}
        >
          <div>
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
          </div>
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
      <SectionThree>
        <div>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type in
          </p>
        </div>
        <div>
          <img src={tasa} alt="cafe" />
        </div>
      </SectionThree>
      <SectionFour>
        <div>
          <img src={tasa} alt="cafe" />
        </div>
        <div>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
        </div>
      </SectionFour>
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
