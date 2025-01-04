import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import {NavLink} from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="bg-gray-900 px-10 md:px-20 py-3 flex justify-between items-center">
            {/* Left Section: Contact Info */}
            <div className="text-white flex gap-6">
                <div className="flex items-center gap-2 hover:underline hover:text-green-400 cursor-pointer">
                    <MailOutlineIcon fontSize="small"/>
                    <span>info@examsnepal.com</span>
                </div>
                <div className="flex items-center gap-2 hover:underline hover:text-green-400 cursor-pointer">
                    <PhoneIcon fontSize="small"/>
                    <span>+977 9802334171</span>
                </div>
            </div>

            {/* Right Section: Auth Buttons with Vertical Lines */}
            <div className="flex items-center gap-2 text-gray-400">
                {/* Left Vertical Line */}
                <div className="h-10 w-[1px] bg-gray-500"></div>

                {/* Auth Buttons */}
                <NavLink
                    to="/register"
                    className="bg-transparent px-4 py-2 rounded hover:text-green-600  transition duration-300"
                >
                    Register
                </NavLink>
                {/*Center Vertical Line*/}
                <div className="h-10 w-[1px] bg-gray-500"></div>
                <NavLink
                    to="/login"
                    className="bg-transparent px-4 py-2 rounded hover:text-green-600  transition duration-300"
                >
                    Login
                </NavLink>

                {/* Right Vertical Line */}
                <div className="h-10 w-[1px] bg-gray-500"></div>
            </div>
        </div>
    );
};

export default TopHeader;
