import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ bgNav }) => (bgNav ? "#0e4a67e6" : "transparent")};
  box-shadow: ${({ bgNav }) => (bgNav ? "0px 2px 1px gray" : "transparent")};
  position: fixed;
  z-index: 999;
  transition: 0.3s ease;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-family: "monospace";
  letter-spacing: 1px;
  text-decoration: none;
  color: white;
  z-index: 999;
  transition: 300ms ease;

  &:hover {
    text-shadow: 0px 2px 4px #6497d4;
  }

  @media screen and (max-width: 960px) {
    font-size: 2.1rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background: #0e4a67f2;
    position: absolute;
    /* top: 80px; */
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    transition: 0.3s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s all ease;
  text-decoration: none;

  &:hover {
    color: #07cfff;
    transition: 0.5s all ease;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 20%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 680px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  margin-right: 1rem;
  z-index: 999;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: white;
      margin-right: 0.5rem;
    }
  }
`;
