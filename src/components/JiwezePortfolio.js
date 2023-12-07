import React from 'react';
import styled from 'styled-components';

// Styles for Mission and Vision
const MissionVisionSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px; /* Reduced margin */
  color: #33cc66;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 20px;
`;

// Styles for Responsive Layout Columns
const ColumnsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 50px 20px;
`;

const Column = styled.div`
  flex: 1 1 calc(30% - 20px);
  max-width: calc(30% - 20px);
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex: 1 1 calc(45% - 20px);
    max-width: calc(45% - 20px);
  }

  @media screen and (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const JiwezePortfolio = () => {
  return (
    <div>
      {/* Mission and Vision Section */}
      <MissionVisionSection>
        <SectionHeading>Mission and Vision</SectionHeading>
        <div>
          <SubHeading>Mission Statement</SubHeading>
          <Paragraph>
            Our mission is to empower and support young entrepreneurs by providing them with the resources, mentorship,
            and opportunities they need to thrive in their business ventures.
          </Paragraph>
          <SubHeading>Vision Statement</SubHeading>
          <Paragraph>
            Our vision is to cultivate a community where every aspiring young entrepreneur has the guidance and tools
            necessary to transform their innovative ideas into successful and sustainable businesses.
          </Paragraph>
        </div>
      </MissionVisionSection>

      {/* Responsive Columns */}
      <ColumnsContainer>
        {/* Column 1 */}
        <Column>
          <SectionHeading>Programs Offered</SectionHeading>
          <Paragraph>
            Explore our diverse programs designed to enhance entrepreneurial skills and promote business growth.
          </Paragraph>
        </Column>

        {/* Column 2 */}
        <Column>
          <SectionHeading>Mentorship Opportunities</SectionHeading>
          <Paragraph>
            Learn about our mentorship programs offering guidance and support from experienced industry professionals.
          </Paragraph>
        </Column>

        {/* Column 3 */}
        <Column>
          <SectionHeading>Financial Literacy Resources</SectionHeading>
          <Paragraph>
            Discover resources aimed at improving financial knowledge and understanding for business success.
          </Paragraph>
        </Column>
      </ColumnsContainer>
    </div>
  );
};

export default JiwezePortfolio;
