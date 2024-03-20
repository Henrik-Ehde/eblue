import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
// Ugly navbar - need styling
export default function Navbar() {
  return (
    <nav>
      <Link to="/eblue">Home</Link>
      <Link to="/eblue/about">About</Link>
      <Link to="/eblue/contact">Contact</Link>
      <Link to="/eblue/products">Products</Link>
    </nav>
  );
}
