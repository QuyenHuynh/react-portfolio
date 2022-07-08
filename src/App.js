import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Views from "./Views";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Views />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
