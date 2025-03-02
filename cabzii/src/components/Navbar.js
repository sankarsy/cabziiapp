import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

function Navbar({ isLoggedIn, setIsLoggedIn, theme, setTheme }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };


  const Navelink = [
    { id: 1, name: 'HOME', link: '/#' },
    { id: 2, name: 'CARS', link: '/#' },
    { id: 3, name: 'ABOUT', link: '/#' },
    { id: 4, name: 'BOOKING', link: '/#' },
  ];



  return (
    <nav className='shadow-md bg-white dark:bg-dark text-dark dark:text-white duration-300'>
      <div className='container md:py-0 '>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold font-serif'>cabzii.in</h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {Navelink.map((data) => (
                <li key={data.id} className='py-4'>
                  <a
                    className='inline-block py-2 hover:border-b-2 hover:text-primary
               hover:border-primary transition-colors duration-500 text-lg font-medium'
                    href={data.link}>{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
         </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light  px-1">
    //   <div className="container-fluid">
    //     {/* Brand Name */}
    //     <Link to="/" className="navbar-brand">
    //       cabzii.in
    //     </Link>

    //     {/* Navbar Toggler for Mobile */}
    //     <button 
    //       className="navbar-toggler collapsed" 
    //       type="button" 
    //       data-bs-toggle="collapse" 
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     {/* Navbar Items */}
    //     <div className=" navbar-collapse justify-content-end" id="navbarNav">
    //       <ul className="navbar-nav d-flex align-items-center">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link">Home</Link>
    //         </li>

    //         {!isLoggedIn ? (
    //           <>
    //             <li className="nav-item">
    //               <Link to="/register" className="nav-link">Register</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/login" className="nav-link">Login</Link>
    //             </li>
    //           </>
    //         ) : (
    //           <>
    //             <li className="nav-item">
    //               <Link to="/profile" className="nav-link">Profile</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/admin" className="nav-link">Admin</Link>
    //             </li>
    //             <li className="nav-item">
    //               <button className="btn btn-link nav-link" onClick={handleLogout}>
    //                 Logout
    //               </button>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
