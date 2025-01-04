import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import TopHeader from "./components/headers/top.header.tsx";
import NavHeader from "./components/headers/nav.header.tsx";
import {NavLink} from "react-router-dom";
import {ImageParagraphCard, TitleParagraphCard} from "./components/card/card.component.tsx";

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 200,
        });
    }, []);

    return (
        <>
            <TopHeader/>
            <NavHeader/>
            {/* Banner */}
            <div
                className="relative w-full h-64 bg-cover bg-center min-h-[450px]"
                style={{
                    backgroundImage: 'url(https://example.com/your-image.jpg)', // Replace with your actual image URL
                }}
                data-aos="fade-up"
            >
                <div
                    className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 bg-black bg-opacity-50">
                    <span className="text-green-400 text-xl font-bold">
                        Prepare Yourself Online
                    </span>
                    <h1 className="text-4xl md:text-6xl text-white font-bold py-2" data-aos="zoom-in">
                        Your Preparation <br/> Companion
                    </h1>
                    <p className="text-lg md:text-2xl text-white py-3" data-aos="fade-right">
                        Online Exams for Various Examinations In Nepal.
                    </p>
                    {/* Auth Buttons */}
                    <div className="flex items-center mt-3.5 px-6 md:px-20 gap-2.5" data-aos="fade-left">
                        <NavLink
                            to="/register"
                            className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Register
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="bg-transparent border border-gray-400 hover:bg-red-100 text-gray-800 px-4 py-2 rounded"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="py-10">
                <h1 className="text-4xl text-center" data-aos="fade-up">
                    How it works?
                </h1>
                {/* Underline */}
                <div className="flex justify-center mt-4" data-aos="zoom-in">
                    <div className="w-1/2 h-1 bg-gray-400"></div>
                </div>
                {/* Cards */}
                <div
                    className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-20 my-5">
                    <ImageParagraphCard
                        image={'https://placehold.co/700x400'}
                        paragraph={
                            'Register for the Exam you want to Appear. You can Register in single click for the Exam of your Choice from Dashboard'
                        }
                        title={'Register for the Exam'}
                        data-aos="fade-up"
                    />
                    <ImageParagraphCard
                        image={'https://placehold.co/700x400'}
                        paragraph={
                            'Register for the Exam you want to Appear. You can Register in single click for the Exam of your Choice from Dashboard'
                        }
                        title={'Register for the Exam'}
                        data-aos="fade-up"
                    />
                    <ImageParagraphCard
                        image={'https://placehold.co/700x400'}
                        paragraph={
                            'Register for the Exam you want to Appear. You can Register in single click for the Exam of your Choice from Dashboard'
                        }
                        title={'Register for the Exam'}
                        data-aos="fade-up"
                    />
                </div>
            </div>

            {/* Exams in Nepal */}
            <div className="py-10">
                <h1 className="text-4xl text-center" data-aos="fade-up">
                    Exams at Nepal
                </h1>
                {/* Underline */}
                <div className="flex justify-center mt-4" data-aos="zoom-in">
                    <div className="w-1/2 h-1 bg-gray-400"></div>
                </div>
                {/* Cards */}
                <div
                    className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-20 my-5">
                    <TitleParagraphCard data-aos="fade-up"/>
                    <TitleParagraphCard data-aos="fade-up"/>
                    <TitleParagraphCard data-aos="fade-up"/>
                    <TitleParagraphCard data-aos="fade-up"/>
                    <TitleParagraphCard data-aos="fade-up"/>
                    <TitleParagraphCard data-aos="fade-up"/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
