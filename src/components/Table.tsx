export default function Table(){
    return(
        <>
            <table className="border-seperate border-c64light-purple border table-auto">
                <thead>
                    <tr>
                        <th className="font-press-start text-c64light-purple p-5 border-c64light-purple border">Player</th>
                        <th className="font-press-start text-c64light-purple p-5 border-c64light-purple border">Net Winnings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="font-press-start text-c64light-purple p-5 border-c64light-purple border">Ben Riggs</td>
                        <td className="font-press-start text-c64light-red p-5 border-c64light-purple border">-$1000</td>
                    </tr>
                    <tr>
                        <td className="font-press-start text-c64light-purple p-5 border-c64light-purple border">Mick Kilcorse</td>
                        <td className="font-press-start text-c64-green p-5 border-c64light-purple border">$1000</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}