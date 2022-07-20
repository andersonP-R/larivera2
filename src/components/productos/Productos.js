import React from "react";

import finca1 from "../../images/finca-1.jpg";
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
        img={finca1}
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
