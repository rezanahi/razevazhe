import './Test.css'
import tests from './TestData'
import {useState, useContext} from "react";
import shuffle from "./TestMethods";
import TestOption from "../../components/TestOption/TestOption";
import {Link} from "react-router-dom";
import userXp from '../../context'


function Test () {

    const {increaseUserXpPoint} = useContext(userXp)

    const [questions, setQuestions] = useState(shuffle(tests).slice(0, 10))
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [score, setScore] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    function handlerNextQuestion () {
        setCurrentQuestionIndex(prevState => prevState + 1)
        console.log('selected answer = ', selectedAnswer)
        console.log('correct answer = ', questions[currentQuestionIndex].correctAnswerId)
        if(questions[currentQuestionIndex].correctAnswerId === +selectedAnswer) {
            setScore(prevState => prevState + 1)
        }
        if (currentQuestionIndex + 1 === 10) {
            if(questions[currentQuestionIndex].correctAnswerId === +selectedAnswer) {
                increaseUserXpPoint(score + 1)
            } else {
                increaseUserXpPoint(score)
            }
        }
    }

    function handleOptionClick (e) {
        setSelectedAnswer(e.target.value)
    }

    if(currentQuestionIndex === 10) {
        return (
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="mb-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl xl:text-6xl"
                        >
                            امتیاز شما در این مسابقه : {score}
                        </h1>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button onClick={() => {window.location.reload()}}
                                  className="transition block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                                مسابقه جدید
                            </button>
                            <Link to='/'
                                  className="transition block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                                صفحه اصلی
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <>
                <main className='min-h-screen flex items-center justify-center accent-amber-500'>
                    <div
                        className="max-w-3xl w-full sm:w-3/4 md:w-1/2 mx-auto p-6 shadow-md rounded-lg space-y-6 border border-blue-500 text-white">
                        {/* صورت سوال */}
                        <div className="text-xl font-semibold flex justify-between">
                            <p>مصرع بعدی شعر زیر کدام است؟</p>
                            <p>{currentQuestionIndex + 1}</p>
                        </div>

                        {/* مصرع اول */}
                        <div className="text-lg font-medium  ">
                            <p>{questions[currentQuestionIndex].question}</p>
                        </div>

                        <span className='h-px w-full bg-blue-500 block'></span>

                        {/* گزینه‌ها */}
                        <div className="space-y-4">
                            {
                                questions[currentQuestionIndex].options.map((option, index) => {
                                    return (
                                        <TestOption handleOptionClick={handleOptionClick}
                                                    text={option.text}
                                                    value={option.id}
                                                    key={index}/>
                                    )
                                })
                            }
                            {/*<div className="flex items-center gap-5">*/}
                            {/*    <input onClick={handleOptionClick} type="radio" id="option1" name="answer" value={questions[currentQuestionIndex].options[0].id}*/}
                            {/*           className="h-5 w-5 text-blue-500 focus:ring-blue-500"/>*/}
                            {/*    <label htmlFor="option1"*/}
                            {/*           className="ml-3 text-lg">{questions[currentQuestionIndex].options[0].text}</label>*/}
                            {/*</div>*/}
                            {/*<div className="flex items-center gap-5">*/}
                            {/*    <input onClick={handleOptionClick} type="radio" id="option2" name="answer" value={questions[currentQuestionIndex].options[1].id}*/}
                            {/*           className="h-5 w-5 text-blue-500 focus:ring-blue-500"/>*/}
                            {/*    <label htmlFor="option2"*/}
                            {/*           className="ml-3 text-lg">{questions[currentQuestionIndex].options[1].text}</label>*/}
                            {/*</div>*/}
                            {/*<div className="flex items-center gap-5">*/}
                            {/*    <input onClick={handleOptionClick} type="radio" id="option3" name="answer" value={questions[currentQuestionIndex].options[2].id}*/}
                            {/*           className="h-5 w-5 text-blue-500 focus:ring-blue-500"/>*/}
                            {/*    <label htmlFor="option3"*/}
                            {/*           className="ml-3 text-lg">{questions[currentQuestionIndex].options[2].text}</label>*/}
                            {/*</div>*/}
                            {/*<div className="flex items-center gap-5">*/}
                            {/*    <input onClick={handleOptionClick} type="radio" id="option4" name="answer" value={questions[currentQuestionIndex].options[3].id}*/}
                            {/*           className="h-5 w-5 text-blue-500 focus:ring-blue-500"/>*/}
                            {/*    <label htmlFor="option4"*/}
                            {/*           className="ml-3 text-lg">{questions[currentQuestionIndex].options[3].text}</label>*/}
                            {/*</div>*/}
                        </div>

                        {/* دکمه سوال بعدی */}
                        <div className="text-center">
                            <button onClick={handlerNextQuestion}
                                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                سوال بعدی
                            </button>
                        </div>
                    </div>
                </main>
            </>
        )
    }

}


export default Test