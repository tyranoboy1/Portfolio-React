import { styled } from "styled-components";
import colors from "../../styles/colors";
import githubicon from "../../assets/githubicon.svg";

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 100px 30px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.orangeColor};
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const ArchiCard = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  padding: 50px;
  width: 30%;
  height: 100%;
  border-radius: 8px;
  background-color: ${colors.whiteColor};
  min-width: 404px;
`;
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const TextColumnBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 2;
  margin-top: 50px;
`;

const RowBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginleft }) => marginleft}px;
`;

const Archibing = () => (
  <ContentBox id="archiving">
    <BgBox>
      <Text fontSize={60}>Archiving</Text>
      <ArchiCard>
        <RowBox>
          <TextBox>
            <Img src={githubicon}></Img>
            <Text marginleft={20}>GitHub</Text>
          </TextBox>
          <a
            href="https://github.com/tyranoboy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </RowBox>
        <TextColumnBox>
          <Text>· 학부시절 팀 프로젝트 및 개인 프로젝트</Text>
          <Text>· 코딩 연습 및 공부 할때 쓰던 코드들</Text>
        </TextColumnBox>
      </ArchiCard>
    </BgBox>
  </ContentBox>
);
export default Archibing;
