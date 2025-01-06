import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from "../layout/user.layout.tsx";
import Home from "../Home.tsx";
import FindMCQ from "../pages/mcq";
import {ToastContainer} from "react-toastify";
import BlogPage from "../pages/blog";
import {useContext, useEffect} from "react";
import {AOSContext} from "../context/AosContext.tsx";

const RouterConfig = () => {
  const aosContext=useContext(AOSContext)
    useEffect(() => {
        aosContext?.refreshAOS()
    }, []);
    return (
        <>
            <BrowserRouter>
                <ToastContainer position={"top-center"} autoClose={3000} hideProgressBar={false} closeOnClick={true}
                                draggable={true} pauseOnHover={true}/>
                <Routes>
                    <Route path={'/'} element={<UserLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'/find-mcq'} element={<FindMCQ/>}/>
                        <Route path={'/blog'} element={<BlogPage/>}/>
                    </Route>
                </Routes>


            </BrowserRouter>
        </>
    )
}

export default RouterConfig