import styled from "styled-components";

const StyledWrapper = styled.div`
    font-family: "Times New Roman", Times, serif;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledHeaderOne = styled.h1`
    color: blue;
`;

const StyledP = styled.p`
    padding: 10px;
    margin: 10px;
    font-family: "American Typewriter";
`;

export default function Homepage(){
    return(
        <StyledWrapper>
            <StyledHeaderOne>Project proposal</StyledHeaderOne>
            <StyledP>Theme: </StyledP>
            <StyledP>NASA, aerospace informations</StyledP>
            <StyledP>Tentative applied frameworks: </StyledP>
            <StyledP>react</StyledP>
        </StyledWrapper>
    )
}