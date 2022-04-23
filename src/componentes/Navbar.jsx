import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(fireApp);

const Navbar = (props) => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand " to="/">
          {" "}
          Guitarras Custom{" "}
        </Link>
        <div>
          <div className="d-flex">
            <NavLink className="btn btn-dark mr-2" to="/">
              Home
            </NavLink>
            {props.firebaseUser !== null ? (
              <button
                className="btn btn-dark mr-2"
                onClick={() => cerrarSesion()}
              >
                Cerrar Sesion
              </button>
            ) : (
              <NavLink className="btn btn-dark mr-2" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
