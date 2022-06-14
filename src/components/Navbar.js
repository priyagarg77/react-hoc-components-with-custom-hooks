import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Simple HOC</Link>
          </li>
          <li>
            <Link to="/fetch-repo-using-hoc">Fetch Repo using axios</Link>
          </li>
          <li>
            <Link to="/custom-hook-api-call">Custom hooks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
