import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/NavBar';


function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductItem />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig;