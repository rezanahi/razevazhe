



function TestOption ({handleOptionClick, text, value}) {


    return(
        <>
            <div className="flex items-center gap-5">
                <input onClick={(e) => {handleOptionClick(e)}} type="radio" id="option2" name="answer"
                       value={value}
                       className="h-5 w-5 text-blue-500 focus:ring-blue-500"/>
                <label htmlFor="option2"
                       className="ml-3 text-lg">{text}</label>
            </div>
        </>
    )
}


export default TestOption