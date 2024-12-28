import './Home.css'
import {Link} from 'react-router-dom'

function Home () {


    return(
        <>
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="mb-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl xl:text-8xl"
                        >
                            راز واژه
                        </h1>

                        <p className="mx-auto max-w-xl sm:text-xl/relaxed">
                            دل میرود ز دستم صاحب دلان خدا را
                        </p>
                        <p className="mx-auto max-w-xl sm:text-xl/relaxed">
                            دردا کـه <span className='text-amber-500'>راز</span> پنهان خواهـد شد آشـکارا
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link to='/test'
                                  className="transition block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                                شروع مسابقه
                            </Link>
                            <Link to='/poll'
                                  className="transition block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                                بخش نظرسنجی
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home