import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Products from './components/Products';
import Vitrine from './components/Vitrine';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Vitrine />} />
      <Route path="/Kirk" element={<Vitrine />} />
      <Route path="/Kirk/produit" element={<Products />} />
      <Route path="/kirk/vitrine" element={<Vitrine />} />
      <Route path="/kirk/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
