import TopHeader from "../components/headers/top.header.tsx";
import NavHeader from "../components/headers/nav.header.tsx";
import {Outlet} from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            <TopHeader/>
            <NavHeader/>
            <Outlet/>

        </>
    )
}

export default UserLayout