import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
fontfamily:montserrat;
align-items:center;
width:100%;
margin:10px;
`
const BalanceBox = styled.div`
width:100%;
font-size:18px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
fontweight:bold;
`;
const AddTran = styled.button`
background:black;
color:white;
padding: 5px 10px;
borderradius:4px;
cursor:pointer;
fontweight:bold;
font-size:15px;
`;
const AddTranContainer = styled.div`
display:flex;
flex-direction:column;
border:1px solid #e6e8e9;
gap:10px;
`;
const AddTranView = () =>{
return (
    <AddTranContainer>
        <input placeholder="Amount"/>
        <input placeholder="Description"/>
    </AddTranContainer>
)
}
const OverviewComponent = (props) =>{
    const [isAddVissible,toggleAdd] = useState(true)
return (
    <Container>
<BalanceBox>
    Balance:$10000
    <AddTran>{isAddVissible ?"Cancel":"ADD"}</AddTran>
</BalanceBox>
{isAddVissible && <AddTranView/>}
    </Container>
)

}

export default OverviewComponent;