import styled from "styled-components";

export const AboutSectionOne = styled.div`
  display: flex;
  /* revizar heigth */
  height: auto;
  margin: 0px 40px 0px 40px;
  margin-bottom: 50px;
  overflow: hidden;

  .imageContainer {
    img {
      width: 100%;
      height: 620px;
      object-fit: cover;
    }
  }

  .descriptionContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0px 10px 0px 10px;

    div {
      display: flex;
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
    .descriptionContainer {
      div {
        svg {
          width: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 785px) {
    flex-direction: column;
    align-items: center;
    margin: 0px;
    .descriptionContainer {
      width: 90%;
      div {
        p {
          font-size: 20px;
        }

        svg {
          margin-top: 10px;
          width: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 395px) {
    flex-direction: column;
    align-items: center;
    margin: 0px;
    height: 1020px;
    margin-bottom: 10px;
    margin-top: 40px;

    .imageContainer {
      border: 10px solid #0e4a67;
      border-radius: 50%;
      img {
        width: 100%;
        height: 320px;
        object-fit: cover;
      }
    }

    .descriptionContainer {
      width: 95%;
      padding: 10px 20px 0px 20px;
      div {
        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export const AboutSectionTwo = styled.div``;
