import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "../Login/Login";
import Profile from "../Profile/Profile";

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  interface AppState {
    login: string;
    isLoading: boolean;
    error: string;
  }

  const [state, setState] = useState<AppState>({
    login: "",
    isLoading: false,
    error: "",
  });

  const loginFetching = (): void => {
    setState({
      ...state,
      isLoading: true,
    });
  };

  const loginSuccess = (login: string): void => {
    setState({
      ...state,
      login,
      isLoading: false,
    });
  };

  const loginError = (error: string): void => {
    setState({
      ...state,
      isLoading: false,
      error,
    });
  };

  const logout = (): void => {
    localStorage.clear();
    setState({
      login: "",
      isLoading: false,
      error: "",
    });
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      setState((state) => ({
        ...state,
        login,
      }));
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            loginFetching={loginFetching}
            loginSuccess={loginSuccess}
            loginError={loginError}
            login={state.login}
            error={state.error}
            isLoading={state.isLoading}
          />
        }
      />
      <Route
        path="/profile"
        element={<Profile login={state.login} logout={logout} />}
      />
    </Routes>
  );
};

export default App;
