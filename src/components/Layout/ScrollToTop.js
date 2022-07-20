import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };

  window.addEventListener("scroll", () => {
    window.pageYOffset > 500 ? setScrollState(true) : setScrollState(false);
  });

  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <FaChevronUp />
    </ToTop>
  );
};

const ToTop = styled.div`
  display: block;
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: ${({ scrollState }) => (scrollState ? "2rem" : "-3rem")};
  border-radius: 2rem;
  background-color: #0e4a67;
  padding: 0.5rem;
  transition: 0.3s ease;

  svg {
    font-size: 1.6rem;
    color: white;
  }
`;
