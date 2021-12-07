import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from "./App";
import Home from './Home'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      
      <Route path = '/' element = {<Home />}/>
      <Route path = 'bot' element = {<App />} />

    </Routes>   
  </BrowserRouter>,
  document.getElementById("root")
);
