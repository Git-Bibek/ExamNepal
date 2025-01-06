import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {useState} from "react";
import {toast} from "react-toastify";

const QuestionCard = () => {
    const questions = [
        {
            question: "What is the sum of 2 + 2?",
            options: ["4", "5", "6", "7"],
            correctAnswer: "4", // Add correct answer
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris", // Add correct answer
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars", // Add correct answer
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            correctAnswer: "100°C", // Add correct answer
        },
    ];

    // State to store the selected answers for each question
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string | null }>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    // Handle answer change for each question
    const handleAnswerChange = (questionIndex: number, answer: string) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
    };

    // Handle form submission and display correct options
    const handleSubmit = () => {
        let calculatedScore = 0;

        questions.forEach((question, questionIndex) => {
            if (selectedAnswers[questionIndex] === question.correctAnswer) {
                calculatedScore += 1;
            }
        })
        setScore(calculatedScore)
        setShowResults(true);
        toast.success(`Your score is ${calculatedScore} out of ${questions.length}!`);

        setTimeout(() => {
            setShowResults(false);
            setSelectedAnswers({});
        }, 5000);
    };

    return (
        <div>
            <div className={' relative'}>
                {
                    showResults && (
                        <div className="absolute top-6 right-6 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                            <div className="flex flex-col items-center gap-3">
                                <div className="text-xl font-semibold text-gray-800">
                                    <span className="text-lg">Your Score:</span>
                                    <span className="text-2xl text-blue-600">{score} / {questions.length}</span>
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    <span className="text-lg">Percentage:</span>
                                    <span
                                        className="text-xl text-green-600">{((score / questions.length) * 100).toFixed(2)}%</span>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={"px-6 py-4 flex items-center mx-20 gap-3"}>
                <div className={"mt-4 flex flex-col gap-4"}>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h3 className={"text-2xl font-bold text-start"}>
                                <span>{questionIndex + 1}. </span>
                                {question.question}</h3>
                            <div className={'flex items-center justify-center'}>
                                <AddPhotoAlternateIcon fontSize={'large'}/>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                {question.options.map((option, optionIndex) => (
                                    <div
                                        className={"flex gap-2 items-center"}
                                        key={optionIndex}
                                        style={{
                                            backgroundColor:
                                                showResults && option === question.correctAnswer
                                                    ? "lightgreen" // Highlight correct answer
                                                    : "initial",
                                            textDecoration:
                                                showResults && selectedAnswers[questionIndex] === option && option !== question.correctAnswer
                                                    ? "line-through"
                                                    : "none",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name={`answer-${questionIndex}`}
                                            className={`w-4 h-4`}
                                            style={{
                                                accentColor: selectedAnswers[questionIndex] === option ? "green" : "initial",
                                            }}
                                            onChange={() => handleAnswerChange(questionIndex, option)}
                                            checked={selectedAnswers[questionIndex] === option}
                                            value={option}
                                            disabled={showResults} // Disable the options after submission
                                        />
                                        <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* Submit button */}
                    {!showResults ? (
                        <button
                            className={"mt-4 p-2 bg-blue-500 text-white rounded"}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    ) : <button
                        className={"mt-4 p-2 bg-blue-500 text-white rounded"}
                        onClick={() => setShowResults(false)}
                    >
                        Reset
                    </button>}
                </div>

            </div>
        </div>
    );
};

export default QuestionCard;
