import {Link} from "react-router-dom";
import {useContext} from "react";
import userXp from "../../context";
import { IoDiamond } from "react-icons/io5";

function NavBar () {
    const {userXpPoint} = useContext(userXp)

    return (
        <nav className="border-b border-b-blue-500 w-100 px-8 md:px-auto">
            <div
                className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        <li className="md:px-4 md:py-2 text-blue-500">
                            <Link to='/'>صفحه اصلی</Link>
                        </li>
                        <li className="md:px-4 md:py-2 text-blue-500">
                            <Link to='/test'>مسابقه</Link>
                        </li>
                        <li className="md:px-4 md:py-2 text-blue-500">
                            <Link to='/poll'>نظرسنجی</Link>
                        </li>
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                    <div
                        className="px-4 py-2 bg-indigo-500 text-gray-50 rounded-xl flex items-center gap-2">
                        <span className='pt-1'>امتیاز شما : {userXpPoint}</span>
                        <IoDiamond className='fill-amber-400'/>

                    </div>
                </div>
            </div>
        </nav>
    )
}



export default NavBar