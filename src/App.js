import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import DetailPage from "./page/DetailPage/DetailPage";
import Header from "./component/Header/Header";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
      </Routes> 
    </BrowserRouter>
  );
}
