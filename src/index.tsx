import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
