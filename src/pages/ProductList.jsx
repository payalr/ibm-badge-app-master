import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductList = () => {
  const [products, Setproducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log("success");
        Setproducts(resp);
      });
  }, []);

  return (
    <>
      <Header />
      <ProductListWrapper>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </ProductListWrapper>
      <Footer />
    </>
  );
};

export default ProductList;
