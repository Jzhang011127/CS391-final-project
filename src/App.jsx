import Header from './components/Header.jsx'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import APODComponent from './components/APODComponent';
import styled from 'styled-components';

import UserActivity from "./components/UserActivity.jsx";
import CommentsPage from "./components/CommentsPage.jsx";
import {useContext} from "react";
import BackgroundContextProvider, {BackgroundContext} from "./components/BackgroundContextProvider.jsx";
import HomePage from "./components/HomePage.jsx";
import UserLogContextProvider from "./components/UserLogContextProvider.jsx";
import CommentsContextProvider from "./components/CommentsContextProvider.jsx";


const StyledApp = styled.div`
    text-align: center;
`;

const StyledRouter = styled.div`
    background-color: ${(props) => (props.$shouldBeBlue ? props.$background : '')};
`;

function Root() {
    const {toggle, background} = useContext(BackgroundContext);
    return (
        <StyledRouter $shouldBeBlue={toggle} $background={background}>
            <Header/>
            <Routes>
                <Route
                    path="/*"
                    element={<HomePage/>}
                />
                <Route
                    path="/apod/*"
                    element={<APODComponent/>}
                />
                <Route
                    path='/UserAct/*'
                    element={<UserActivity/>}
                />
                <Route
                    path='/comments/*'
                    element={<CommentsPage/>}
                />
            </Routes>
        </StyledRouter>
    );
}
const router = createBrowserRouter(
    [{path:"*", Component: Root},]
);
function App() {
    return (
        <BackgroundContextProvider>
            <UserLogContextProvider>
                <CommentsContextProvider>
                    <StyledApp>
                        <RouterProvider router={router}/>
                    </StyledApp>
                </CommentsContextProvider>
            </UserLogContextProvider>
        </BackgroundContextProvider>
    );
}

export default App;
