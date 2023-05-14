import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.div`
  display: flex;
  position: relative;
  bottom: 0;

  border-top: 1px solid ${colors.grayFontColor};
`;

const Text = styled.div`
  font-size: 16px;

  color: ${colors.whiteColor};
`;

const FooterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px 0 30px 0;
  justify-content: center;
  background-color: ${colors.blackColor};
`;

const Footer = () => {
  return (
    <>
      <Container>
        <FooterBox>
          <Text>포트폴리오 잘봐주셔서 감사합니다.</Text>
        </FooterBox>
      </Container>
    </>
  );
};

export default Footer;
