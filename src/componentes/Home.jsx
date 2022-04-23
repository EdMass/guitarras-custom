import React from "react";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(fireApp);

const Home = () => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <h1>Home</h1>
      {
          user && (
              <h3>{user.email}</h3>
          )
      }
    </>
  );
};

export default Home;
