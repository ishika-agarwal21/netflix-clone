import React from 'react'
import { Link } from 'react-router-dom';
import {ImSearch} from 'react-icons/im';
import netflix_logo from '../../netflix-logo.png';

const Header = () => {
  return (
    <nav className="header">
      <img src={netflix_logo} />

      <div>
        <Link to="/tvshows"> TV Shows</Link>
        <Link to="/tvshows"> Movies</Link>
        <Link to="/tvshows"> Recently Added</Link>
        <Link to="/tvshows"> My List</Link>

      </div>
      <ImSearch/>
    </nav>
  );
}

export default Header
