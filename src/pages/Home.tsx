import Button from '../components/Button';
import Table from '../components/Table';
import Logo from './Logo';
import { useState } from 'react';

export default function Home(){
    const [show, setShow] = useState(false)

    const revealTable = (e: React.MouseEvent<HTMLElement>) =>{
      setShow(!show)
    }
    
    return(
        <>
            <Button clickFunc={revealTable} text="Press to Reveal" />
            <Logo />
            <div className={show ? 'flex items-center justify-center': 'hidden' }>
                <Table />
            </div>
        </>
    );
}