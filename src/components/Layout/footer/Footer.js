import React from "react";
import {
  ContainerLogos,
  FooterContainer,
  FooterDescription,
  Wrapper,
  LaRiveraLink,
} from "./footerElements";

import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "1.4em" } }}>
          <ContainerLogos>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </ContainerLogos>
        </IconContext.Provider>
        <FooterDescription>
          Empresa <LaRiveraLink to="/inicio">&copy;La Rivera</LaRiveraLink>{" "}
          todos los derechos reservados
        </FooterDescription>
      </Wrapper>
    </FooterContainer>
  );
};
