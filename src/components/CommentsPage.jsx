//James Zhang
import { useState, useContext } from "react";
import styled from "styled-components";
import {CommentsContext} from "./CommentsContextProvider.jsx";

const CommentsWrapper = styled.div`
    font-family: "Times New Roman", Times, serif;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CommentsHeader = styled.h1`
    color: darkblue;
`;

const StyledForm = styled.form`
    text-align: center;
    padding: 5px;
    margin: 5px;
`;

const StyledButton = styled.button`
    text-align: center;
    padding: 5px;
    margin: 5px;
`;

export default function CommentsPage(){
    const {comments, commentsHandler, counter, counterHandler} = useContext(CommentsContext);
    const handleSubmit = (event) => {
        /* https://stackoverflow.com/questions/67941002/understanding-event-target-elements; 
        https://stackoverflow.com/questions/17401364/how-and-when-to-use-preventdefault */
        event.preventDefault();
        const newComment = event.target.elements.commentInput.value;
        commentsHandler(newComment)
        event.target.reset();
    };
    return (
        <CommentsWrapper>
            <CommentsHeader>
                Leave us comments :)
            </CommentsHeader>
            <StyledForm onSubmit={handleSubmit}>
                <input name='commentInput' placeholder='add your comment here'></input>
                <button type='submit'>submit your comment</button>
            </StyledForm>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <p>numbers of likes: {counter}</p>
            <StyledButton onClick={counterHandler}>leave us a like</StyledButton>
        </CommentsWrapper>
    );
}