import "./App.css";
import "./components/home/Home.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
    <Footer/>
    </div>

  );
};

export default App;
