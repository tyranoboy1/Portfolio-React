import styled from "styled-components";
import colors from "../../styles/colors";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
`;
const Headerbar = styled.div`
  width: 100%;
  height: 75px;
  padding: 30px 0 30px 36px;
  display: flex;
  max-width: 1980px;
  min-width: 480px;
  position: fixed;
  background-color: ${colors.blackColor};
  z-index: 100;
  align-items: center;
  justify-content: space-between;
`;
const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 15px;
  color: ${colors.whiteColor};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginleft }) => marginleft}px;
  cursor: pointer;
`;

const HeaderItem = styled.li`
  font-size: 15px;
  margin: 0 36px 0 36px;
  color: ${colors.whiteColor};
  position: relative;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    color: ${colors.grayColor};
  }

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

const SubItem = styled.li`
  font-size: 15px;
  color: ${colors.blackColor};
  position: relative;
  top: 50px;
  left: 15px;
  margin-top: 10px;
  transition: 0.25s;

  cursor: pointer;
  &:hover {
    color: ${colors.grayColor};
  }
`;
const IoCloseWrapper = styled.div`
  z-index: 11;
`;
const ContentBox = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 200px;
  height: 180px;
  background-color: ${colors.beigeColor};
  z-index: 10;
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    const headerElement = document.getElementById("header");
    const height = headerElement ? headerElement.clientHeight : 0;
    setHeaderHeight(height);
  }, []);

  let y;
  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      y = element.offsetTop - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 580);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container>
        <Headerbar id="header">
          <Text onClick={() => handleItemClick("home")}>JiHoon Porfolio</Text>
          <ContentBox>
            {isMobile ? (
              <HeaderList>
                <HeaderItem onClick={() => handleItemClick("about-me")}>
                  About Me
                </HeaderItem>
                <HeaderItem onClick={() => handleItemClick("skills")}>
                  Skills
                </HeaderItem>
                <HeaderItem onClick={() => handleItemClick("archiving")}>
                  Archiving
                </HeaderItem>
                <HeaderItem onClick={() => handleItemClick("project")}>
                  Project
                </HeaderItem>
              </HeaderList>
            ) : (
              <HeaderList>
                {isMenuClicked ? (
                  <>
                    <IoCloseWrapper>
                      <IoClose
                        color={colors.blackColor}
                        style={{ marginRight: "20px" }}
                        onClick={handleMenuClick}
                        cursor={"pointer"}
                        size={15}
                      />
                    </IoCloseWrapper>
                    <HeaderWrapper>
                      <SubItem onClick={() => handleItemClick("about-me")}>
                        About Me
                      </SubItem>
                      <SubItem onClick={() => handleItemClick("skills")}>
                        Skills
                      </SubItem>
                      <SubItem onClick={() => handleItemClick("archiving")}>
                        Archiving
                      </SubItem>
                      <SubItem onClick={() => handleItemClick("project")}>
                        Project
                      </SubItem>
                    </HeaderWrapper>
                  </>
                ) : (
                  <IoMenu
                    size={15}
                    color={colors.whiteColor}
                    style={{ marginRight: "20px" }}
                    onClick={handleMenuClick}
                    cursor={"pointer"}
                  />
                )}
              </HeaderList>
            )}
          </ContentBox>
        </Headerbar>
      </Container>
    </>
  );
};

export default Header;
