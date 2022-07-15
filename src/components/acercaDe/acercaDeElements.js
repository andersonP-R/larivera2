import styled from "styled-components";

export const AboutSectionOne = styled.div`
  display: flex;
  width: 90%;
  height: 600px;
  margin: 0px auto;
  margin-bottom: 50px;

  .imageContainer {
    display: flex;
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .descriptionContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    padding: 0px 10px 0px 10px;

    div {
      display: flex;
      width: 100%;
      margin-bottom: 15px;

      p {
        font-family: "Trebuchet MS";
        margin: 10px;
        font-size: 18px;
      }

      svg {
        display: block;
        width: 4.5rem;
        color: #0e4a67;
        font-size: 4.2rem;
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    height: 700px;
    .descriptionContainer {
      overflow: scroll;
      div {
        svg {
          width: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 635px) {
    .descriptionContainer {
      div {
        p {
          font-size: 15px;
        }

        svg {
          width: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 395px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1000px;
    margin-bottom: 20px;

    .imageContainer {
      width: 90%;
      border: 10px solid #0e4a67;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .descriptionContainer {
      width: 100%;
      padding: 10px 20px 0px 20px;
    }
  }
`;

export const AboutSectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;
