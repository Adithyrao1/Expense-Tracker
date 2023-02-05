import styled from "styled-components";
import HomeComponent from './modules/home/index';
import {AiOutlineCopyright} from 'react-icons/ai'

const Container = styled.div `
display: flex;
flex-direction: column;
font-family: 'Raleway', sans-serif;
font-size: 1rem;
align-items: center;
margin: 3rem 0 2rem;
width:100%;
`;

const Header = styled.span `
color:black;
font-size: 25px;
font-weight: 600;
font-family: 'Raleway', sans-serif;

`;
const footerm = styled.footer `
color: white;
`;
function App() {
  return (
    <Container> 
    Adithya Nanuvala's
    <Header style={{color:'#00337C'}}> Expense Tracker System </Header>
    <HomeComponent />
    <footerm>Copyright <AiOutlineCopyright/> AdithyaNanuvala</footerm>
    </Container>
  );
}

export default App;
