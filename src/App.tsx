import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Players from "./pages/Players";
import NoPage from "./pages/NoPage";
import "../dist/output.css";

//Background stylings applied as well as the react router
function App() {
  return (
    <>
      <div className="flex-grow  bg-c64light-purple p-5 h-screen">
        <Router>
          <div className="bg-c64purple h-[90%] m-10 p-5 text-center">
            <h1 className="m-2 text-3xl">****c64 PokerStats****</h1>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/players" element={<Players />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
