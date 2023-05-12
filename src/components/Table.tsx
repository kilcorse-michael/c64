interface Player {
  id: number;
  name: string;
  net: number;
}

interface PlayerTableProps {
  players: Player[];
}

//Table for displaying player data recieved from props
export default function Table({ players }: PlayerTableProps) {
  return (
    <>
      <table className="border-seperate border-c64light-purple border table-auto">
        <thead>
          <tr>
            <th className="font-press-start text-c64light-purple p-5 border-c64light-purple border">
              Player
            </th>
            <th className="font-press-start text-c64light-purple p-5 border-c64light-purple border">
              Net Winnings
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr key={player.id}>
                <td className="font-press-start text-c64light-purple p-5 border-c64light-purple border">
                  {player.name}
                </td>
                <td
                  className={
                    "font-press-start p-5 border-c64light-purple border " +
                    (player.net > 0 ? "text-c64-green" : "text-c64light-red")
                  }
                >
                  ${player.net}.00
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
