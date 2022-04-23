import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand " to="/"> Guitarras Custom </Link>
        <div>
            <div className="d-flex">
                <NavLink className="btn btn-dark mr-2" to="/">
                    Home
                </NavLink>
                <NavLink className="btn btn-dark mr-2" to="/login">
                    Login
                </NavLink>
            </div>
        </div>
    
      </div>
    </div>
  );
};

export default Navbar;
