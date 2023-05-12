import { Link } from "react-router-dom";

//Temporary Navigation Menu. Build text based input by saving input to state and comparing to router pages
const Nav = () => {
  return (
    <>
      <div className="space-x-4">
        <h1 className="text-3xl animate-pulse">|</h1>
        <Link to="/players">Go to Players</Link>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
};

export default Nav;
