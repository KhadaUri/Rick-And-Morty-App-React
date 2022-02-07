import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";
const tab = '\u00A0';
const Navbar = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu"><img src={require('../../images/logo.png')} width="250" height="50" /> 
          <span className="text-primary"></span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
          @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-6">  
          <NavLink to="/Mainpage" className="nav-link"> <i class="bi bi-file-person"></i>{tab}
              Home
            </NavLink>          
            <NavLink to="/episodes" className="nav-link"><i class="bi bi-tv"></i>{tab} 
              Episodes
            </NavLink>
            <NavLink to="/" className="nav-link"> <i class="bi bi-file-person"></i>{tab}
              Characters
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;