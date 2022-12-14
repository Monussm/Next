import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return <>
    <nav className="navbar navbar-expand-lg">
  <div className="container mt-5">
    <NavLink className="navbar-brand" href="/"><img className="Logo" src="../Image/Logo.png"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto">
      <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item mx-3"> 
          <a className="nav-link">TOOLS</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link ">BLOG</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link">LOGIN</a>
        </li>
      </ul>
      <NavLink href="#" className="Get-started">GET STARTED</NavLink>
   
    </div>
  </div>
</nav>
    
    
    
    
    
    
    </>





}
export default Navbar;