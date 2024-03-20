import React from 'react';
import { Link } from 'react-router-dom';
// Ugly navbar - need styling
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}
