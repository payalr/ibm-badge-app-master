import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductDetailWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ProductDetailLeft = styled.div`
  margin-right: 50px;
`;

const ProductImg = styled.img``;
const ProductDetailRight = styled.div``;
const ProductName = styled.h2``;

const ProductPrice = styled.h4``;
const ProductDesc = styled.p`
    font-size: 13px;
    font-weight: 300
`;

const AddtoCart = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background: #916953;
  padding: 7px;
  width: 100px;
  margin-top: 20px;
  border: 1px solid #c0b9b9;
  cursor: pointer;
`;

const ProductDetail = () => {
  let { id } = useParams();

  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProduct(resp);
      });
  }, []);

  return (
    <>
      <Header />
      <ProductDetailWrapper>
        <ProductDetailLeft>
          <ProductImg src={Product.thumbnail} />
        </ProductDetailLeft>
        <ProductDetailRight>
          <ProductName>{Product.title}</ProductName>
          <ProductPrice>$ {Product.price}</ProductPrice>
          <ProductDesc>{Product.description}</ProductDesc>
          <AddtoCart>Add to Cart</AddtoCart>
        </ProductDetailRight>
      </ProductDetailWrapper>
      <Footer />
    </>
  );
};

export default ProductDetail;
