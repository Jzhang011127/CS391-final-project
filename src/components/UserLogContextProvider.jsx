import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const UserLogContext = createContext();

export default function UserLogContextProvider({children}){
    const [userLog, setUserLog] = useState([]);
    const logUpdate = (newEvent) => {
        setUserLog(userLog => [...userLog, newEvent]);
    };
    return(
        <UserLogContext.Provider value={{userLog, logUpdate}}>
            {children}
        </UserLogContext.Provider>
    )
}
UserLogContextProvider.propTypes={
    children: PropTypes.node,
}