import styled from "styled-components";
import HomeComponent from './modules/home/index';
import { AiOutlineCopyright } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  align-items: center;
  margin: 3rem 0 2rem;
  width: 100%;
`;

const Header = styled.span`
  color: #00337C;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
`;

const Footer = styled.footer`
  color: white;
  margin-top: 2rem;
`;

function App() {
  return (
    <Container>
      <span>Adithya Nanuvala's</span>
      <Header>Expense Tracker System</Header>
      <HomeComponent />
      <Footer>
        Copyright <AiOutlineCopyright /> Adithya Nanuvala
      </Footer>
    </Container>
  );
}

export default App;
