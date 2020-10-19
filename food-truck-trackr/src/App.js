import React from 'react';
import './App.css';
import logo from "./Images/food-truck-trackr_logo.png"

export default function App() {
  return (
    <div className="App">
      <div className="title-container">
        <img src={logo} alt="Logo" />
        <h1>Food Truck<br></br>TrackR</h1>
      </div>
    </div>
  );
}
