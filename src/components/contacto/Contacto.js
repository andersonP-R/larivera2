import React from "react";
import "./contacto.css";
import tasa from "../../images/tasa-caffe-2.jpg";
import { ImgContainer } from "../inicio/inicioElements";

export const Contacto = () => {
  return (
    <>
      <ImgContainer>
        <div>
          <img src={tasa} alt="banner-2" />
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ImgContainer>
      <div className="contacto">
        <div className="mapa">
          <p>Puedes localizarnos en</p>
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6207.267850604975!2d-75.89150631616496!3d2.3882717916825773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1655577808474!5m2!1ses!2sco"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="page">
          <h1 className="heading">Contacto</h1>

          <form className="contact" action="mailto:gamer1999r@gmail.com">
            <input type="text" placeholder="Nombres" />
            <input type="text" placeholder="Apellidos" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Motivo de contacto" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
};
