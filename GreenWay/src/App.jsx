import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Main from "../Assets/components/Navigation.jsx";
import "./App.css";
import Park3 from "../Assets/components/Park3.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/park/:id" element={<Park3 />} />
      </Routes>
    </>
  );
}

export default App;
