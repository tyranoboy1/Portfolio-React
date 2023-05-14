import { styled } from "styled-components";
import { IoPersonSharp } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { IoBrushSharp } from "react-icons/io5";
import colors from "../../styles/colors";

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AboutBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
  margin-top: 100px;
  justify-items: center;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginleft }) => marginleft}px;
  font-family: test;
`;

const Box = styled.div`
  height: 100%;
  width: 30%;
  padding: 30px 0 30px 0;
  background-color: ${colors.yelloColor};
  display: flex;
  justify-content: center;
  margin-top: 100px;
  border-radius: 8px;
  align-items: center;
  min-width: 480px;
  border-radius: 50px;
  flex-direction: column;
  line-height: 1.2;
`;

const About = () => {
  return (
    <ContentBox id="about-me">
      <Text marginTop={20} fontSize={60}>
        About Me
      </Text>
      <AboutBox>
        <InfoBox>
          <IoPersonSharp size={40} />
          <TextBox>
            <Text marginleft={30} fontSize={20}>
              이름
            </Text>
            <Text marginleft={30} fontSize={20}>
              한지훈
            </Text>
          </TextBox>
        </InfoBox>
        <InfoBox>
          <IoCalendarClear size={40} />
          <TextBox>
            <Text marginleft={30} fontSize={20}>
              생년월일
            </Text>
            <Text marginleft={30} fontSize={20}>
              99.01.13
            </Text>
          </TextBox>
        </InfoBox>
        <InfoBox>
          <IoLocationSharp size={40} />
          <TextBox>
            <Text marginleft={30} fontSize={20}>
              주소지
            </Text>
            <Text marginleft={30} fontSize={20}>
              서울특별시 성북구
            </Text>
          </TextBox>
        </InfoBox>
        <InfoBox>
          <IoCall size={40} />
          <TextBox>
            <Text marginleft={30} fontSize={20}>
              연락처
            </Text>
            <Text marginleft={30} fontSize={20}>
              010.9186.0623
            </Text>
          </TextBox>
        </InfoBox>
        <InfoBox>
          <IoMailSharp size={40} />
          <TextBox>
            <Text marginleft={30} fontSize={20}>
              이메일
            </Text>
            <Text marginleft={30} fontSize={20}>
              gkwlgnd@naver.com
            </Text>
          </TextBox>
        </InfoBox>
        <InfoBox>
          <IoBrushSharp size={40} />
          <TextBox>
            <Text marginleft={30} fontSize={20}>
              학력
            </Text>
            <Text marginleft={30} fontSize={20}>
              한국성서대학교
              <br />
              (컴퓨터소프트웨어학과)
            </Text>
          </TextBox>
        </InfoBox>
      </AboutBox>
      <Box>
        <Text fontSize={20}>-문의사항-</Text>
        <Text fontSize={20}>연락처로 연락주세요</Text>
      </Box>
    </ContentBox>
  );
};
export default About;
