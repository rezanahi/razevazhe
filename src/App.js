import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Test from './pages/Test/Test'
import Poll from './pages/Poll/Poll'
import NavBar from "./components/NavBar/NavBar";
import userXp from './context'
import {useState, useEffect, useRef} from "react";


function App() {

    const [userXpPoint, setUserXpPoint] = useState(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        console.log('USEEFEECT 1')
        const savedUserXpPoint = localStorage.getItem("userXpPoint");
        if (savedUserXpPoint) {
            setUserXpPoint(parseInt(savedUserXpPoint, 10)); // مقدار را به عدد تبدیل کنید
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        localStorage.setItem("userXpPoint", JSON.stringify(userXpPoint));
    }, [userXpPoint]);

    function increaseUserXpPoint (xp) {
        setUserXpPoint(prevState => prevState + xp)
    }

  return (
      <div className='bg-gray-900 min-h-screen h-full font-vazir'>
          <BrowserRouter>
              <userXp.Provider value={{userXpPoint, increaseUserXpPoint}}>
                  <NavBar></NavBar>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/admin" element={<Admin/>} />
                      <Route path="/test" element={<Test/>} />
                      <Route path="/poll" element={<Poll/>} />
                  </Routes>
              </userXp.Provider>
          </BrowserRouter>
      </div>
  );
}

export default App;
