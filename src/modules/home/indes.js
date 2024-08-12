import styled from "styled-components";
import OverviewComponent from "./overviewComponent";
import TrascationComp from "./TrascationComp";

const Container = styled.div`
display:flex;
flex-direction:column;
fontfamily:montserrat;
align-items:center;
margin:30px  0 10px;
`
const HomeComponent = (props) =>{
return (
    <Container>
<OverviewComponent/>
<TrascationComp/>
    </Container>
)

}

export default HomeComponent;