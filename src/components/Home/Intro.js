import { styled } from "styled-components";
import Introimg from "../../assets/Intro.jpg";
import colors from "../../styles/colors";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Text = styled.div`
  font-size: 40px;
  line-height: 1.3;
  color: ${colors.whiteColor};
  margin-top: ${({ marginTop }) => marginTop}px;
`;

const Intro = () => {
  return (
    <ContentBox id="home">
      <Img src={Introimg}></Img>
      <TextBox>
        <Text marginTop={30}>끊임없이 도전하고 성장하는</Text>
        <Text>웹 프론트 개발자입니다.</Text>
      </TextBox>
    </ContentBox>
  );
};
export default Intro;
