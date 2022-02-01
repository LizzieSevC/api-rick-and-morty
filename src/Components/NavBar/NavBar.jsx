import './NavBar.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 


export function NavBar() {
  return (
    <>
  <header>
    <ul>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/Characters'> Characters </Link></li>
      <li><Link to='/Episodes'> Episodes </Link></li>
    </ul>
  </header>
    <div>
    <Outlet/> {/* structure! renders the routes and it's childrens */}
    </div>
    </>
);
}
