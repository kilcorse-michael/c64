import { useState } from "react";
import Nav from "./Nav";

//Include attentional styles as well as implement navigation
export default function Header() {
  const [routeState, setRoute] = useState("");

  return (
    <>
      <Nav />
    </>
  );
}
