import styled from "styled-components";

export const ContainerItems = styled.div`
  display: flex;
  width: 90%;
  margin: 0px auto;
  margin-bottom: 80px;

  @media screen and (max-width: 670px) {
    flex-direction: column;
    width: 70%;
    margin-bottom: 40px;
  }
`;

export const Items = styled.div`
  transition: 300ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Item = styled.div`
  margin: 0px 10px 0px 10px;
  background-color: #eee;
  box-shadow: 0px 2px 4px gray;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 670px) {
    margin-bottom: 50px;
  }
`;

export const DescriptionItemContainer = styled.div`
  padding: 10px 10px 10px;
  font-family: "Trebuchet MS";
  font-size: 20px;
  h2 {
    margin-bottom: 6px;
  }

  p {
    color: gray;
  }

  @media screen and (max-width: 945px) {
    font-size: 17px;
  }
`;
