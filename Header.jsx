
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    
     <header>
    <h1>Blossomia </h1>
        <div class="header-content"></div>
        
        <nav>
            <ul>
               <Link to = "/Section "> Acasa </Link>
               <Link to = "/Catalog "> Catalog </Link>
               <Link to = "/About "> Despre noi </Link>
               <Link to = "/Contact "> Contact </Link>
            </ul>
        </nav>
        </header>
        
    
    
    
    </>
  )}
export default Header;
