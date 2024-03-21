import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink end activeClassName="active" to="/eblue">Home</NavLink>
      <NavLink activeClassName="active" to="/eblue/about">About</NavLink>
      <NavLink activeClassName="active" to="/eblue/contact">Contact</NavLink>
      <NavLink activeClassName="active" to="/eblue/products">Products</NavLink>
    </nav>
  );
}
