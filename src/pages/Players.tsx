import Button from "../components/Button";
import Table from "../components/Table";
import { useState } from "react";

export default function Players() {
  const [show, setShow] = useState(false);

  //player data to display
  const players = [
    { id: 0, name: "Michael Kilcorse", net: 1000 },
    { id: 1, name: "Benjamin Riggs", net: -1000 },
  ];

  const revealTable = () => {
    setShow(!show);
  };
  //Playing with tailwind. Can make uniform low level components like buttons.
  return (
    <>
      <Button clickFunc={revealTable} text="Press to Reveal" />
      <div className={show ? "flex items-center justify-center" : "hidden"}>
        <Table players={players} />
      </div>
    </>
  );
}
