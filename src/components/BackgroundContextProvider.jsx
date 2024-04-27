//James Zhang
import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const BackgroundContext = createContext();

function BackgroundContextProvider({children}){
    const background = 'lightgrey';
    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
        setToggle((state) => !state);
    };
    return(
        <BackgroundContext.Provider value={{background, toggle, toggleState}}>
            {children}
        </BackgroundContext.Provider>
    )
}

BackgroundContextProvider.propTypes={
    children: PropTypes.node,
}

export default BackgroundContextProvider;