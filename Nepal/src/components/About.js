import React from "react";

import styled from "styled-components";
import Image from 'react-image-resizer';
import yeo from './world.jpg'
import {DropdownButton, Dropdown} from 'react-bootstrap'


const Section = styled.section`
  /padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #fafafa;
  text-align: center;
  margin-top: 2px;
  display:"block",
  justifyContent: "center",
  margin:"0 auto"
  
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const About = () => {
  const width = window.innerWidth;
  return (
    <Section id="about">
      
      <div className="container">
        
        <SectionTitle>  United Nepali is an online platform for Nepalese communities
                worldwide! Join one of our groups or start
                your own to share info, events, and collaborate.</SectionTitle>    
        <div className="row">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <Image
                  img src={yeo} 
                  height={230}
                  width={100}
                  style = {{ 
                      display:"block",
                      justifyContent: "center",
                      margin:"0 auto"
                  }} />

            <DropdownButton id="dropdown-item-button" title="Locations">
              <Dropdown.Item as="button">Toronto</Dropdown.Item>
              <Dropdown.Item as="button">Miluwakee</Dropdown.Item>
              <Dropdown.Item as="button">Kathmandu</Dropdown.Item>
            </DropdownButton>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
