import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Ruta para login */}
          <Route path="/products" element={<Products />} /> {/* Ruta para ver productos */}
          <Route path="/products/:id" element={<ProductDetail />} /> {/* Ruta para ver detalle de un producto */}
          <Route path="/add-product" element={<AddProduct />} /> {/* Ruta para añadir un nuevo producto */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
