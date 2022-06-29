import "./App.css";
import "./components/home/Home.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Cactus from "./components/routes/Cactus";
import Sunflower from "./components/routes/Sunflower";
import Orchid from "./components/routes/Orchid";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <div className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sunflower" element={<Sunflower />}></Route>
            <Route path="/orchid" element={<Orchid />}></Route>
            <Route path="/cactus" element={<Cactus />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
