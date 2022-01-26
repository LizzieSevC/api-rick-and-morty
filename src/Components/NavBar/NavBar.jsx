import './NavBar.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; {/* Outlet es como Placeholder en los form*/}


export function NavBar() {
  return (
    <>
  <header>
    <ul>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/Characters'> Characters </Link></li>
    </ul>
  </header>
    <div>
    <Outlet/>
    </div>
    </>
);
}
