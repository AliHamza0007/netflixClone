import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import ErrorPage from "./pages/404";
import Play from "./pages/Play";
import { useAuth } from "./context/UseAuth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to track user login status
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };

  const [auth] = useAuth();
  useEffect(() => {
    auth?.user && setIsLoggedIn(true);
  }, [auth]);

  return (
    <>
      <Routes>
        <Route
          path="/movies"
          element={
            isLoggedIn ? (
              <Movies />
            ) : (
              <Login
                onLogin={setIsLoggedIn}
                redirectToLogin={redirectToLogin}
              />
            )
          }
        />
        <Route
          path="/play/:key"
          element={
            isLoggedIn ? (
              <Play />
            ) : (
              <Login
                onLogin={setIsLoggedIn}
                redirectToLogin={redirectToLogin}
              />
            )
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/login"
          element={<Login redirectToLogin={redirectToLogin} />}
        />
      </Routes>
    </>
  );
};

export default App;
