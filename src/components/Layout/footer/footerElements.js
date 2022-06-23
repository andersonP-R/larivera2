import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  background: #0e4a67;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterDescription = styled.p`
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  letter-spacing: 2px;
  font-size: 18px;
  padding: 5px 0px 5px 0px;

  @media screen and (max-width: 680px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const LaRiveraLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 460px) {
    text-decoration: underline;
  }
`;

export const ContainerLogos = styled.div`
  display: flex;
  padding: 5px 0px 5px 0px;

  a {
    color: white;
    transition: 300ms ease;
    padding: 0px 10px 0px 10px;

    &:hover {
      color: #ddd;
    }
  }
`;
