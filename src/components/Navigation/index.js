import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from "react-router-dom";
import "../../index.css"
export const Navigation = () => {
  
  return (
      <>
    <nav className="navbar">
    <h1 id="avatarName">😃Sean Elliott</h1>
      <NavLink to="/About" >About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Resume" >Resume</NavLink>
      <NavLink to="/Contact" >Contact</NavLink>
      
    </nav>
    </>
  );
};
