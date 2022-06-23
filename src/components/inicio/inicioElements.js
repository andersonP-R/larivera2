import styled from "styled-components";

export const ContainerInicio = styled.div`
  margin: 0px auto;
`;

export const ImgContainer = styled.section`
  margin-bottom: 70px;

  div {
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
    border-radius: 0px 0px 120px 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    width: 90%;
    margin: 0px auto;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;
    text-align: center;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 460px) {
    div {
      height: 300px;
    }

    p {
      padding: 0px 20px 0px 20px;
      font-size: 18px;
    }
  }
`;

export const SectionOne = styled.section`
  display: flex;
  width: 90%;
  margin: 0px auto;
  margin-bottom: 60px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px 0px 10px;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0px 25px 0px 25px;

      p {
        padding: 20px 0px 20px 0px;
      }
    }
  }

  @media screen and (max-width: 760px) {
    width: 60%;
    margin-bottom: 0px;
    div {
      flex-direction: column;
      div {
        margin-bottom: 30px;
      }
    }
  }

  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const SectionTwo = styled.section`
  border-radius: 120px 0px 0px 120px;
  overflow: hidden;
  margin-bottom: 60px;
`;

export const SectionThree = styled.section`
  display: flex;
  height: 350px;
  border-radius: 0px 100px 0px 0px;
  overflow: hidden;
  margin: 0px 40px 0px 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    p {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 20px;
      text-align: center;
      margin: 0px 40px 0px 40px;
    }
  }

  div {
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 812px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    border-radius: 0px;
    div {
      width: 100%;
      p {
        margin-bottom: 30px;
      }
    }

    div {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 200px;
        overflow: hidden;
      }
    }
  }

  @media screen and (max-width: 460px) {
    margin-bottom: 50px;
    div {
      p {
        margin: 10px 10px 30px 10px;
        font-size: 18px;
      }
    }

    div {
      img {
        border-radius: 600px;
        overflow: hidden;
      }
    }
  }
`;

export const SectionFour = styled.section`
  display: flex;
  margin: 0px 40px 60px 40px;
  height: 350px;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    p {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 20px;
      text-align: center;
      margin: 0px 40px 0px 40px;
    }
  }

  div {
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 812px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    border-radius: 0px;
    div {
      width: 100%;
      p {
        margin-top: 40px;
        margin-bottom: 30px;
      }
    }

    div {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 200px;
        overflow: hidden;
      }
    }
  }

  @media screen and (max-width: 460px) {
    div {
      p {
        margin: 10px 10px 30px 10px;
        font-size: 18px;
      }
    }

    div {
      img {
        border-radius: 600px;
        overflow: hidden;
      }
    }
  }
`;

export const SectionFive = styled.section``;
