import { Routes, Route } from 'react-router-dom'
import Header  from './components/Header'
import { Players, Home } from './pages';
import "../dist/output.css";

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </>
  )
}

export default App
