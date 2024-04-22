import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const CommentsContext = createContext();

export default function CommentsContextProvider({children}){
    const [comments, setComments] = useState([]);
    const [counter, setCounter] = useState(0);
    const commentsHandler = (newComment) => {
        setComments(comments => [...comments, newComment]);
    };
    const counterHandler = () => {
        setCounter(counter => counter + 1);
    };
    return(
        <CommentsContext.Provider value={{comments, commentsHandler, counter, counterHandler}}>
            {children}
        </CommentsContext.Provider>
    );
}

CommentsContextProvider.propTypes={
    children: PropTypes.node,
}