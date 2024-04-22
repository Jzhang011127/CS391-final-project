import styled from "styled-components";
import {useContext} from "react";
import {UserLogContext} from "./UserLogContextProvider.jsx";

const APIWrapper = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Times New Roman", Times, serif;
`;

const APIHeader = styled.h1`
    color: darkblue;
`;

export default function UserActivity(){
    const {userLog} = useContext(UserLogContext);
    return (
        <APIWrapper>
            <APIHeader>User Log page</APIHeader>
            <ul>
            {userLog.map((act, index) => (
                <li key={index}>{act}</li>
            ))}
            </ul>
        </APIWrapper>
    )
};