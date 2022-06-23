import React from "react";
// parallax effect banner
import "./parallaxEffectAbout.css";

// reusable components
import { ContainerInicio, ImgContainer } from "../inicio/inicioElements";
// styled-components
import { AboutSectionOne, AboutSectionTwo } from "./acercaDeElements";
// images
import agricultor from "../../images/agricultor-1.jpg";
import agricultor_2 from "../../images/agricultor-2.png";
// react-icons
import { FaAward, FaCheckDouble } from "react-icons/fa";

// react-reveal

export const AcercaDe = () => {
  return (
    <ContainerInicio>
      <ImgContainer>
        <div>
          <img src={agricultor} alt="agricultor" />
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ImgContainer>

      <AboutSectionOne>
        <div className="imageContainer">
          <img src={agricultor_2} alt="agricultor-2" />
        </div>
        <div className="descriptionContainer">
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
        </div>
      </AboutSectionOne>
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
