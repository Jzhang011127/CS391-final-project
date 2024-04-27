
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import {useContext} from "react";
import {BackgroundContext} from "./BackgroundContextProvider.jsx";
import {UserLogContext} from "./UserLogContextProvider.jsx";

const AppHeader = styled.header`
    background-color: Navy;
    max-height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const StyledButton = styled.button`
    text-align: center;
    color: darkgrey;
`;

const AppLink = styled(RouterLink)`
    color: #61dafb;
    margin-right: 10px;
`;

function Header() {
    const {toggleState} = useContext(BackgroundContext);
    const {logUpdate} = useContext(UserLogContext);
    const navigationStatus = (path) => {
        logUpdate(`Navigated to: ${path}`);
    };
    return (
        <AppHeader>
            <h1>NASA</h1>
            <nav>
                <AppLink to='/' onClick={() => navigationStatus('HomePage')}>Home</AppLink>
                <AppLink to='/apod' onClick={() => navigationStatus('APOD')}>APOD</AppLink>
                <AppLink to='/UserAct' onClick={() => navigationStatus('User Activity')}>User Activity</AppLink>
                <AppLink to='/comments' onClick={() => navigationStatus('comments')}>comments</AppLink>
            </nav>
            <StyledButton onClick={toggleState}>Change Background Color</StyledButton>
        </AppHeader>
    );
}

export default Header;