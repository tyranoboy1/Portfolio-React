import { styled } from "styled-components";
import colors from "../../styles/colors";
import bowling from "../../assets/portfolio/bowling.webp";
import present from "../../assets/portfolio/present.webp";
import bid from "../../assets/portfolio/bid.webp";
import androidapp from "../../assets/portfolio/androidapp.webp";
import covid from "../../assets/portfolio/covid.webp";
import health from "../../assets/portfolio/health.webp";
import pos from "../../assets/portfolio/pos.webp";
import bomb from "../../assets/portfolio/bomb.webp";
import board from "../../assets/portfolio/board.webp";

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
  padding: 20px 70px 100px 70px;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.greenColor};
`;

const ProjectCard = styled.div`
  width: 100%;
  height: 600px;
  /* border-radius: 8px; */
  background-color: ${colors.whiteColor};
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    height: 400px;
  }
`;

const CardImg = styled.div`
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 600px;
  background: url(${(props) => props.src}) no-repeat center center / cover;
  background-size: cover;
`;

const ProjectBox = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Text = styled.div`
  font-size: 16px;

  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginleft }) => marginleft}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  color: ${({ WHITE }) => WHITE && `${colors.whiteColor}`};
`;

const LargeText = styled.div`
  font-size: 60px;
  margin-bottom: 50px;
`;
// const ProjectRowBox = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: ${({ justifyContent }) => justifyContent};
//   border-radius: 12px 12px 0 0;
//   @media (max-width: 480px) {
//     display: flex;
//     justify-content: center;
//   }
// `;
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${colors.whiteColor};
  display: flex;
  flex-direction: column;
  word-break: break-all;
  border-radius: 0 0 12px 12px;
`;
const DescriptionBox = styled.div`
  background-color: ${colors.blackColor};
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  line-height: 1.3;
`;
const Portfolio = () => {
  return (
    <ContentBox id="project">
      <BgBox>
        <LargeText>Project</LargeText>
        <ProjectBox>
          <ProjectCard>
            <CardImg src={bowling} />
            <TextBox>
              <Text>2017. 4 ~ 2017. 6</Text>
              <Text marginTop={10}>· Language: C</Text>
              <Text marginTop={3}>· Project Name: 볼링 회원 프로그램</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  볼링 회원 프로그램은 회원 가입을 통해 회원을 등록하고 볼링
                  게임 수를 입력받아 그에 맞는 결제 금액을 보여주는
                  프로그램입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>

          <ProjectCard marginBottom={300}>
            <CardImg src={present}></CardImg>

            <TextBox>
              <Text>2017. 9 ~ 2017. 11</Text>
              <Text marginTop={10}>· Language: C</Text>
              <Text marginTop={3}>· Project Name: 컴소를 찾아라</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  컴소를 찾아라 프로그램은 좌우로 움직이면서 화면 위에 상자를
                  조준해서 맞췄을 때 갇혀있는 컴소(컴퓨터소프트웨어 줄임말)
                  글자를 찾는 게임입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>

          <ProjectCard>
            <CardImg src={health}></CardImg>

            <TextBox>
              <Text>2018. 4 ~ 2018. 6</Text>
              <Text marginTop={10}>· Language: C#</Text>
              <Text marginTop={3}>· Project Name: 헬스 프로그램</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  WindowForm 화면에서 헬스 회원 등록 후 본인이 한 운동의 버튼을
                  클릭해 운동량을 알아보는 프로그램입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
          <ProjectCard>
            <CardImg src={pos}></CardImg>

            <TextBox>
              <Text>2020. 10 ~ 2020. 12</Text>
              <Text marginTop={10}>· Language: Java</Text>
              <Text marginTop={3}>· Project Name: POS 프로그램</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  GUI 화면에서 버튼을 클릭해 음식을 주문 받고 결제 금액을
                  계산해주는 프로그램입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
          <ProjectCard>
            <CardImg src={bomb}></CardImg>

            <TextBox>
              <Text>2021. 4 ~ 2021. 6</Text>
              <Text marginTop={10}>· Language: JavaScript</Text>
              <Text marginTop={3}>· Project Name: 지뢰 찾기</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  지뢰를 피해 모든 칸을 열면 성공하는 게임입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
          <ProjectCard>
            <CardImg src={covid}></CardImg>

            <TextBox>
              <Text>2021. 4 ~ 2021. 6</Text>
              <Text marginTop={10}>· Language: Python</Text>
              <Text marginTop={3}>· Project Name: 코로나 프로그램</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  백신을 맞은 사람이 늘어나면 확진자 수가 줄어드는가? 를 주제로
                  python 코로나 프로그램 제작
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
          <ProjectCard>
            <CardImg src={board}></CardImg>

            <TextBox>
              <Text>2021. 10 ~ 2021. 12</Text>
              <Text marginTop={10}>· Language: JavaScript</Text>

              <Text marginTop={3}>· Project Name: 게시판</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  RestAPi를 이용하여 CRUD 작업을 한 게시판 프로그램입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
          <ProjectCard>
            <CardImg src={bid}></CardImg>

            <TextBox>
              <Text>2021. 10 ~ 2021. 12</Text>
              <Text marginTop={10}>· Language: JavaScript</Text>

              <Text marginTop={3}>· Project Name: 실시간 경매 프로그램</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  실시간 경매를 열어서 가장 높은 금액을 제시한 사람이 입찰하게
                  되는 프로그램입니다 .
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
          <ProjectCard>
            <CardImg src={androidapp}></CardImg>

            <TextBox>
              <Text>2022. 2 ~ 2022. 6</Text>
              <Text marginTop={10}>· Language: Kotlin</Text>

              <Text marginTop={3}>· Project Name: 자취생 커뮤니티 어플</Text>
              <Text marginTop={3}>· Project Description</Text>
              <DescriptionBox>
                <Text WHITE>
                  게시물을 작성하여 댓글을 통해 사람들과 소통할 수 있고
                  자취생들을 위하여 필요한 정보들을 공유해주는 프로그램입니다.
                </Text>
              </DescriptionBox>
            </TextBox>
          </ProjectCard>
        </ProjectBox>
      </BgBox>
    </ContentBox>
  );
};

export default Portfolio;
