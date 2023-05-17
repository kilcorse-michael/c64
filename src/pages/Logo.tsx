import text from '../assets/ascii-art.txt?raw'

export default function Logo(){
    const convertToLines = (txt: string) =>{
        const logoArr = txt.split('\r');
        return logoArr
    }
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const logoByLine = convertToLines(text)
    
    return(
            <>
                <pre className='text-[5px] font-press-start text-c64light-purple'>
                    {
                        logoByLine.map(line =>{
                            return setTimeout(String(line), 3000)
                        })
                    }
                </pre>
            </>
            )
}