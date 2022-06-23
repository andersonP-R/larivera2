import React from "react";
import { ImgContainer } from "../inicio/inicioElements";

import banner_2 from "../../images/cafe-banner2.jpg";
import { products } from "../../data/productos";
import {
  Item,
  Items,
  DescriptionItemContainer,
  ContainerItems,
} from "./productsElements";

export const Productos = () => {
  return (
    <div>
      <ImgContainer>
        <div>
          <img src={banner_2} alt="banner-2" />
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ImgContainer>

      <ContainerItems>
        {products.map((product) => {
          return (
            <Items key={product.id}>
              <Item>
                <img src={product.image} alt="product" />

                <DescriptionItemContainer>
                  <h2>{product.nombre}</h2>
                  <p> {product.descripcion} </p>
                </DescriptionItemContainer>
              </Item>
            </Items>
          );
        })}
      </ContainerItems>
    </div>
  );
};
