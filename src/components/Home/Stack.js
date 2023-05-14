import { styled } from "styled-components";
import cssicon from "../../assets/cssicon.svg";
import htmlicon from "../../assets/htmlicon.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import reacticon from "../../assets/reacticon.png";
import githubicon from "../../assets/githubicon.svg";
import giticon from "../../assets/giticon.svg";
import figma from "../../assets/figma.svg";
import slack from "../../assets/slack.svg";
import certificate from "../../assets/certificate.svg";
import colors from "../../styles/colors";

const ContentBox = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BgBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.skyBlueColor};
`;

const StackBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 20px 30px 100px 30px;
  @media (max-width: 1089px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const StackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${colors.whiteColor};
  /* min-width: 250px; */
`;
const StackImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;

const StackImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginleft }) => marginleft}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const TitleText = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginleft }) => marginleft}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Stack = () => {
  return (
    <ContentBox id="skills">
      <BgBox>
        <TextBox>
          <TitleText marginTop={20} fontSize={60}>
            Skills
          </TitleText>
        </TextBox>
        <StackBox>
          <StackCard>
            <Text fontSize={30} marginTop={30} marginBottom={50}>
              Front-End
            </Text>
            <StackImgBox>
              <StackImg src={htmlicon}></StackImg>
              <StackImg src={cssicon}></StackImg>
              <StackImg src={javascript}></StackImg>
              <StackImg src={typescript}></StackImg>
              <StackImg src={reacticon}></StackImg>
            </StackImgBox>
          </StackCard>
          <StackCard>
            <Text fontSize={30} marginTop={30} marginBottom={30}>
              Communication
            </Text>
            <StackImgBox>
              <StackImg src={figma}></StackImg>
              <StackImg src={slack}></StackImg>
            </StackImgBox>
          </StackCard>
          <StackCard>
            <Text fontSize={30} marginTop={30} marginBottom={30}>
              Version Control
            </Text>
            <StackImgBox>
              <StackImg src={githubicon}></StackImg>
              <StackImg src={giticon}></StackImg>
            </StackImgBox>
          </StackCard>
          <StackCard>
            <Text fontSize={30} marginTop={30} marginBottom={30}>
              Certificate
            </Text>
            <StackImgBox>
              <StackImg src={certificate}></StackImg>
              <Text marginBottom={30}>Linux Ettential</Text>
            </StackImgBox>
          </StackCard>
        </StackBox>
      </BgBox>
    </ContentBox>
  );
};

export default Stack;
