import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';
import Header from './component/Header/Header';
import './App.css';
import DetailPage from './page/DetailPage/DetailPage';
import Layout from './template/Layout';
import BookingPage from './page/BookingPage/BookingPage';
import AdminListUser from './page/AdminListUser/AdminListUser';
import Spinner from './component/Spinner/Spinner';
export default function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* user route */}
          <Route path="/" element={<Layout content={<HomePage />} />} />
          <Route
            path="/detail/:id"
            element={<Layout content={<DetailPage />} />}
          />
          <Route
            path="/booking"
            element={<Layout content={<BookingPage />} />}
          />
          {/* admin route */}
          <Route
            path="list-user"
            element={<Layout content={<AdminListUser />} />}
          />
          {/* login */}
          console.log("login:", login)
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
