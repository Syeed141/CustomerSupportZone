import React from "react";

const Navbar = () => {
  return (
     <div className="navbar bg-base-100 shadow-sm px-6">
     
      <div className="navbar-start">
        
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-1"
          >
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <a className="text-xl font-bold tracking-tight">
          CS <span className="font-normal">— Ticket System</span>
        </a>
      </div>

    
      <div className="navbar-end gap-3">
       {/* Desktop menu */}
        <ul className="menu menu-horizontal hidden lg:flex px-1 gap-1 text-sm">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>

        <button className="btn border-0  text-white bg-[#422AD5] hover:bg-[#3722b5] ">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
