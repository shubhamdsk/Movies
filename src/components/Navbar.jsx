import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbaar-brand">
        <Link to={"/"}>Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to={"/"} className="nav-link">
          {" "}
          Home
        </Link>
        <Link to={"/favorites"} className="nav-link">
          {" "}
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
