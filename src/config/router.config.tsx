import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home.tsx";

const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterConfig