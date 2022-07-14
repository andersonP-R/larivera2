import React from "react";

import banner_2 from "../../images/cafe-banner2.jpg";
import { bannerDescripProductos, products } from "../../data/productosData";
import {
  Item,
  Items,
  DescriptionItemContainer,
  ContainerItems,
} from "./productsElements";
import { MainBanner } from "../Layout/MainBanner";

export const Productos = () => {
  return (
    <div>
      <MainBanner
        img={banner_2}
        alt="banner-café"
        descrip={bannerDescripProductos}
      />

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
