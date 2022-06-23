import React, { useState } from "react";
import {
  Container,
  Logo,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Wrapper,
} from "./NavBarElements";

import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaCoffee,
  FaTelegramPlane,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <Logo to="/inicio">La Rivera</Logo>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink
                to="/inicio"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>
                  <FaHome />
                  INICIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/acerca-de"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>
                  <FaInfoCircle />
                  ACERCA DE
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/productos"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>
                  <FaCoffee />
                  PRODUCTOS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/contacto"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>
                  <FaTelegramPlane />
                  CONTACTO
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};
