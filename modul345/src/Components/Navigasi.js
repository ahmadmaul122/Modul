// Utama.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navigasi.css';
// YourReactComponent.js


const Utama = () => {
  return (
    <div>
      <nav className="main-nav">
        <h2 className="logo">Ahmad Maulana Djati</h2>
        <ul>
          <li><Link to="/" className="nav-link">Buku</Link></li>
          <li><Link to="/Modul4" className="nav-link scroll-link">Total</Link></li>
          <li><Link to="/Modul5" className="nav-link scroll-link">Pegawai</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Utama;
