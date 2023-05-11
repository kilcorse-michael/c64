import { useState } from 'react';
import Button from './components/Button';
import Table from './components/Table';
import "../dist/output.css";

function App() {
  const [show, setShow] = useState(false)

  const revealTable = (e: React.MouseEvent<HTMLElement>) =>{
    setShow(!show)
  }

  return (
    <>
      <div className='flex h-screen bg-c64light-purple'>
        <div className='flex-grow text-center h-5/6 m-5 bg-c64purple'>
          <p className='mt-5 font-press-start text-3xl text-c64light-purple'>****c64 Poker Stats****</p>
          <Button clickFunc={revealTable} text="Press to Reveal" />
          <div className={show ? 'flex items-center justify-center': 'hidden' }>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
