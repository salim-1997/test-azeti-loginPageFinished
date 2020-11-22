import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
var isLoggedIn = false;
export default function App() {
  return (
    <div>
      <Header />
      {isLoggedIn ? <Profile /> : <Login />}
      <Footer />
    </div>
  );
}
