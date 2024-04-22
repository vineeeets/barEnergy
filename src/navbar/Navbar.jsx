import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './assets/logo.jpg';

// const Navbar = ({ onSearch }) => {
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Call the onSearch function passed from the parent component
  //   onSearch(searchQuery);
  // };
  const Navbar = () => {

  return (
    <nav>
      <ul className='Navbar'>
        <li className="companyName">
          <Link to="/">
            <img src={logo} alt="logo" className='logo' />
          </Link>
        </li>
        <div className='navElements'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/audio">Audio</Link></li>
          <li><Link to="/wearables">Wearables</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/about">About</Link></li>
        </div>
        {/* Add search bar */}
        <div className='searchBar'>
          <form >
            <input
              type="text"
              placeholder="Search..."
              // value={searchQuery}
              // onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
