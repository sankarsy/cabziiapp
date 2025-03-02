import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import Myorder from './components/Myorder';
import Admin from './components/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import Forgotpassword from './components/Forgotpassword';
import OTP from './components/OTP';
import Resetpassword from './components/Resetpassword';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Check login state on initial load
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, []);


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement; // Target <html>
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
 


  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero theme={theme}/>
      
      {/* <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/forgotpassword" element={<Forgotpassword setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/otp" element={<OTP setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/resetpassword" element={<Resetpassword setIsLoggedIn={setIsLoggedIn} />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/myorder' element={<Myorder />} />
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
