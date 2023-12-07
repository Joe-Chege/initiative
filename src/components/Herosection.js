import React from 'react';
import styled from 'styled-components';
import treeImage from '../assets/jiweze.jpg'; // Importing the tree image
const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  background-image: url(${treeImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  font-style: italic;
`;

const Herosection = () => {
  return (
    <HeroSectionContainer>
      <div>
        <Heading>Welcome to Jiweze Initiative</Heading>
        <SubHeading>Empowering Young Entrepreneurs</SubHeading>
      </div>
    </HeroSectionContainer>
  );
};

export default Herosection;
