import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div className="logo-container">
          <img id="logo" src="https://www.svgrepo.com/show/297752/skewer.svg" />
          <h1>CT</h1>
        </div>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/headline">
          <li>Headlines</li>
        </Link>
        <Link to="/bitcoin">
          <li>Bitcoin News</li>
        </Link>
        <Link to="/data-headline">
          <li>API Headline News</li>
        </Link>
        <Link to="/data-bitcoin">
          <li>API Bitcoin News</li>
        </Link>
      </ul>
    </nav>
  );
}
