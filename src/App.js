import { styled } from "styled-components";
import Intro from "./components/Home/Intro";
import About from "./components/Home/About";
import Stack from "./components/Home/Stack";
import Archibing from "./components/Home/Archibing";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Portfolio from "./components/Home/Portfolio";
import "./styles/basic.css";

const Container = styled.div`
  width: 100%;
  max-width: 1980px;
  min-width: 480px;
  max-height: 1000px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <Intro />
      <About />
      <Stack />
      <Archibing />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
