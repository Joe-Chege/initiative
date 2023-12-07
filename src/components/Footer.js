import React from 'react';
import styled from 'styled-components';

// Styles for Footer Section
const FooterSection = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const FooterHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FooterParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
`;

// Styles for Responsive Footer Columns
const FooterColumnsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px 0;
`;

const FooterColumn = styled.div`
  flex: 1 1 calc(30% - 20px);
  max-width: calc(30% - 20px);
  padding: 10px;
  text-align: left;

  @media screen and (max-width: 768px) {
    flex: 1 1 calc(45% - 20px);
    max-width: calc(45% - 20px);
  }

  @media screen and (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterHeading>Jiweze Initiative</FooterHeading>
      <FooterParagraph>
        The Jiweze Initiative is committed to empowering young entrepreneurs by providing them with valuable resources
        and mentorship to succeed in their ventures.
      </FooterParagraph>

      {/* Responsive Footer Columns */}
      <FooterColumnsContainer>
        {/* Column 1 */}
        <FooterColumn>
          <FooterHeading>About Us</FooterHeading>
          <FooterLink href="#">About Jiweze</FooterLink>
          <FooterLink href="#">Our Mission</FooterLink>
          <FooterLink href="#">Our Vision</FooterLink>
        </FooterColumn>

        {/* Column 2 */}
        <FooterColumn>
          <FooterHeading>Programs</FooterHeading>
          <FooterLink href="#">Entrepreneurship Programs</FooterLink>
          <FooterLink href="#">Mentorship Opportunities</FooterLink>
          <FooterLink href="#">Financial Literacy Resources</FooterLink>
        </FooterColumn>

        {/* Column 3 */}
        <FooterColumn>
          <FooterHeading>Contact Us</FooterHeading>
          <FooterLink href="mailto:jiweze@example.com">jiweze@example.com</FooterLink>
          <FooterLink href="tel:+1234567890">+1234567890</FooterLink>
          <FooterLink href="#">Nairobi, Kenya</FooterLink>
        </FooterColumn>
      </FooterColumnsContainer>
    </FooterSection>
  );
};

export default Footer;
