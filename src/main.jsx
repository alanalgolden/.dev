import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import theme from "../theme.js";
import Topbar from "./components/Topbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <Topbar />
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
