import {FaSearch} from "react-icons/fa";
import React, {useContext, useEffect, useState} from "react";
import QuestionCard from "../../components/card/QuestionCard.tsx";
import {AOSContext} from "../../context/AosContext.tsx";

const FindMCQ = () => {
    const aosContext = useContext(AOSContext)
    const [searchQuery, setSearchQuery] = useState('');
    const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

    const handleSearch = async () => {
        try {
            console.log(searchQuery);

        } catch (error) {
            console.error('Error searching:', error);
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);
    }
    useEffect(() => {
        aosContext?.refreshAOS()
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        const timeout = setTimeout(() => {
            handleSearch();
        }, 500);
        setDebounceTimeout(timeout);
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [searchQuery]);
    return (
        <>
            <div className={'relative w-full  min-h-[450px]'} data-aos="fade-up">
                <div
                    className="absolute inset-0 flex  justify-between items-center px-6 md:px-20 bg-black bg-opacity-90"
                    style={{backgroundImage: 'url(data:image/jpeg;base64,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)'}}>

                    <div className={' mt-4 flex flex-col gap-1 '}>
                        <span className={' text-white hover:text-green-500 cursor-pointer touch-manipulation'}>
                            Search the Question or Keyword
                        </span>
                        <h1 className={' text-2xl font-bold text-white'}> Exams Nepal Study Room</h1>
                        <p className={' text-gray-400 mt-2 text-sm text-left'}>
                            <span className={'text-green-500'}>192189 + </span>
                            Questions
                        </p>
                    </div>
                    {/*search*/}
                    <div className={' mt-4 min-w-[400px] flex items-center justify-center '}>
                        <input
                            type="text"
                            placeholder="Type the keyword or Topic?"
                            className="flex-grow px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-l-lg"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <button
                            className="flex items-center justify-center px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-r-lg transition-all duration-200"
                            type="submit"
                            onClick={handleSearch}
                        >
                            <FaSearch className={' text-2xl'}/>
                        </button>
                    </div>
                </div>
            </div>
            {/* Searched Questions */}
            <div className={' bg-amber-50 px-6 py-4'}>
                <h1 className={' text-2xl font-bold text-center'}> Questions</h1>
                <div className={' flex flex-col justify-start gap-4'}>

                </div>
            </div>

            <div data-aos="zoom-in">
                <QuestionCard/>
            </div>

        </>
    )
}

export default FindMCQ