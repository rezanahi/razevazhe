import './Poll.css'
import {useState} from "react";


function Poll () {

    const [opinion, setOpinion] = useState('')

    const handleSave = () => {
        if (opinion.trim()) {
            if(localStorage.getItem("userOpinion")) {
                let newUserOpinion = JSON.parse(localStorage.getItem("userOpinion"))
                newUserOpinion = [...newUserOpinion, opinion]
                localStorage.setItem("userOpinion", JSON.stringify(newUserOpinion)); // ذخیره نظر در لوکال استورج
            } else {
                localStorage.setItem("userOpinion", JSON.stringify([opinion, ])); // ذخیره نظر در لوکال استورج
            }
            alert("نظر شما با موفقیت ذخیره شد!");
            setOpinion(""); // بازنشانی تکست باکس
        } else {
            alert("لطفاً نظر خود را وارد کنید.");
        }
    };

    const handleInputChange = (event) => {
        setOpinion(event.target.value);
    };

    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-900 text-white">
                <h1 className="text-xl font-bold mb-4 text-center">نظر شما درباره این بیت از خیام چیست؟</h1>
                <p className="text-lg italic mb-6 text-center">
                    "آنها که ز پیش رفته اند ای ساقی
                    <br />
                    در خاک غرور خفته اند ای ساقی
                    <br />
                    رو باده خورو حقیقت از من بشنو
                    <br />
                    باد است هرآنچه گفته اند ای ساقی
                </p>
                <textarea
                    value={opinion}
                    onChange={handleInputChange}
                    placeholder="نظر خود را اینجا بنویسید..."
                    className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 bg-transparent"
                    rows="5"
                ></textarea>
                <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    ارسال
                </button>
            </div>
        </>
    )
}

export default Poll


