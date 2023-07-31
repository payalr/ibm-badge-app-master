import React from "react";
import styled from "styled-components";
import Head from "../components/Head";
import Footer from "../components/Footer";
import heroImage from '../images/hero.jpg';
const Container = styled.div`
  background-color: #bccce0;
  color: #333;
`;

const HomeBanner = styled.div`

width: 100%;

`;

const Home = () => {
  return (
    <div>
      <Head />
        <HomeBanner>
          <img className="homepagebanner" src={heroImage} alt="" style={{"width":"100%"}} />
        </HomeBanner>
      <Footer />
    </div>
  );
};

export default Home;
