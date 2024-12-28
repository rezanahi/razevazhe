import './Admin.css'
import {useEffect, useState} from "react";



function Admin () {

    const [opinions, setOpinions] = useState([])

    useEffect(() => {
        let ops = JSON.parse(localStorage.getItem("userOpinion"))
        if(ops) {
            setOpinions(ops)
        }
    }, []);

    return(
        <>
            <div className="max-w-2xl mx-auto flex flex-col gap-8 py-16">
                <div
                    className="mx-auto w-full p-4 rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-blue-400">بیت مورد سوال</h3>
                    </div>
                    <div className="flow-root">
                        <p className="text-lg italic mb-6 text-white text-center">
                            آنها که ز پیش رفته اند ای ساقی
                            <br/>
                            در خاک غرور خفته اند ای ساقی
                            <br/>
                            رو باده خورو حقیقت از من بشنو
                            <br/>
                            باد است هرآنچه گفته اند ای ساقی
                        </p>
                    </div>
                </div>

                <div
                    className="mx-auto w-full p-4 rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-blue-400">لیست نظرات</h3>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-700">
                            {
                                opinions.map((opinion) => {
                                    return (
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div
                                                    className="inline-flex items-center text-base font-semibold text-white">
                                                    {opinion}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Admin