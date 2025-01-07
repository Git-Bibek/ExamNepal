import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from "../layout/user.layout.tsx";
import Home from "../Home.tsx";
import FindMCQ from "../pages/mcq";
import {ToastContainer} from "react-toastify";
import BlogPage from "../pages/blog";
import {useContext, useEffect} from "react";
import {AOSContext} from "../context/AosContext.tsx";
import RegisterPage from "../pages/auth/register";
import {AiOutlineWhatsApp} from "react-icons/ai";

const RouterConfig = () => {
    const aosContext = useContext(AOSContext)
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
                        <Route path={'/register'} element={<RegisterPage/>}/>
                    </Route>
                </Routes>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/YOUR_PHONE_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
                    title="Chat with us on WhatsApp"
                >
                    <AiOutlineWhatsApp size={24}/>
                </a>

            </BrowserRouter>
        </>
    )
}

export default RouterConfig