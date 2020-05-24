import React from "react";

import styled from "styled-components";
import Image from 'react-image-resizer';
import img from './logo.png'


const Section = styled.section`
  position: relative;
  padding-top: 138px;
  padding-bottom: 288px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #33506D;



  @media (min-width: 992px) {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 279px;
    padding-bottom: 111px;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

const BgOverlay = styled.div`
  background: #33506D;
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-color: #33506D;
  }
`;

const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 24px;
  
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 49px;
  }
`;


const Home = () => {
  return (
    <Section id="home">
      <BgOverlay />
      <div className="container">
      <Image
         img src={img} 
         height={100}
         width={100}
         style = {{ 
          display:"block",
          justifyContent: "center",
          margin:"0 auto"
         }}
         
          
        />
        <HomeTitle data-aos="zoom-in">
          UNITED NEPALI
        </HomeTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          सयौ थुङ्गा फूलका हामी, एउटै माला नेपालि
        </SubTitle>
      </div>
    </Section>
  );
};

export default Home;
