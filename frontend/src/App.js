import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Stores from "./pages/Stores";

function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:10}}>
        <Link to="/signup">Signup</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/stores">Stores</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/stores" element={<Stores/>}/>
        <Route path="/" element={<Stores/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
