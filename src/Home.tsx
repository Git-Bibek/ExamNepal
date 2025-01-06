import {useContext, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {ImageParagraphCard, TitleParagraphCard} from "./components/card/card.component.tsx";
import {TextInputField} from "./components/form/inputField.tsx";
import {FaBuilding, FaEnvelope, FaPhone, FaUser} from "react-icons/fa6";
import {AOSContext} from "./context/AosContext.tsx";

const HomePage = () => {
    const aosContext = useContext(AOSContext)
    useEffect(() => {
        aosContext?.refreshAOS()
    }, [aosContext]);

    return (
        <>

            {/* Banner */}
            <div
                className="relative w-full h-64 bg-cover bg-center min-h-[450px]"
                style={{
                    backgroundImage: 'url(https://example.com/your-image.jpg)',
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

            {/* contact us */}
            <div className={'relative min-h-[450px] bg-cover bg-gray-200 flex justify-center items-center px-20 py-10'}>
                <div className={' absolute inset-0 flex  justify-between items-center px-6 md:px-20'}>
                    <div className={' flex flex-col gap-1'}>
                        <span className={' text-xl text-green-500 font-bold'}> Want to Conduct an Exam? </span>
                        <p className={' text-xl font-bold text-left'}>
                            We will set up an Online Exam in
                            <br/>
                            your pattern for your Organization
                            <br/>
                            It may be for Academics or Recruitments.
                        </p>
                    </div>
                    <div className={' bg-amber-100 p-5  flex flex-col gap-2 items-center justify-center mt-6 max-w-2xl'}
                         data-aos="fade-up">
                        <form>
                            <span className={' text-center text-gray-600 font-bold'}> Fill the form and we will get back to you.</span>
                            <div className={' flex flex-col  mt-6'}>
                                <TextInputField placeholder={'John Doe'} type={'text'} icon={<FaUser/>}/>
                                <TextInputField placeholder={'iHb3I@example.com'} type={'email'}
                                                icon={<FaEnvelope/>}/>
                                <TextInputField placeholder={'9802334171'} type={'tel'}
                                                icon={<FaPhone/>}/>
                                <TextInputField placeholder={'ABC Company'} type={'text'}
                                                icon={<FaBuilding/>}/>
                                <div className={' flex justify-center mt-2 '}>
                                    <button
                                        type="submit"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*Become an Instructor*/}
            <div className={'relative min-h-[300px] bg-cover bg-blue-400 flex justify-center items-center px-20 py-8'}>
                <div className={' absolute inset-0 flex  flex-col justify-center items-center px-6 md:px-20'}>
                    <h1 className={' text-4xl text-white font-bold'}>Become an Instructor</h1>
                    <p className={' text-xl text-white font-bold font-serif mt-4 text-center max-w-xl'}>
                        Share your knowledge and reach millions of students across the globe. Join the world's largest
                        online learning marketplace.
                    </p>
                    <NavLink to={'/apply-instructor'}
                             className={' bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4'}>
                        Apply as Instructor
                    </NavLink>
                </div>

            </div>
        </>
    );
};

export default HomePage;
