import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn  btn-outline-success">
          Home
        </NavLink>
        <NavLink to="todo" className="btn  btn-outline-success">
          Todo
        </NavLink>
        <NavLink to="rick" className="btn  btn-outline-success">
          Rick & Morty
        </NavLink>
        <NavLink to="space" className="btn  btn-outline-success">
          Space
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
