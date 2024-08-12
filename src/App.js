import './index.js';
import styled from 'styled-components';
import HomeComponent from './modules/home/indes.js';

const Container = styled.div`
display:flex;
flex-direction:column;
fontfamily:montserrat;
align-items:center;
margin:30px  0 10px;
`
const header = styled.span`
color: black;
fontsize:25px;
font-weight:bold;
`
;

function App() {
  return (
    <>
<Container>
  <header>Expenses App</header>
  <HomeComponent/>
  </Container>
    </>
  );
}

export default App;
