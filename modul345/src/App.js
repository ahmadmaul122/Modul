import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modul3 from './Page/Buku';
import Modul4 from './Page/Total';
import Modul5 from './Page/Pegawai';




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Modul3 />} />
        <Route path="/Modul4" element={<Modul4 />} />
        <Route path="/Modul5" element={<Modul5 />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;