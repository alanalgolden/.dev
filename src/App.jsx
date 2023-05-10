import { useState } from "react";
import "./App.css";
import { Container, Row, Col, Navbar, Button } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import Topbar from "./components/Topbar";
import { Layout } from "./components/Layout";

function App() {
  useTheme("dark");
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
