import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "../Login/Login";
import Profile from "../Profile/Profile";

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
