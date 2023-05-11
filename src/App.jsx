import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />\
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
