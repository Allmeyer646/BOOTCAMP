import React from "react";
import About from "./about";
import HomePage from "./homepage";
import NavBar from "./navbar";
import Products from "./products";
import {
    BrowserRouter as Router,
    Routes, 
    Route
} from 'react-router-dom';

export default class Container extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage/>} />                        
                        <Route path="/products" element={<Products/>} />
                        <Route path="/about" element={<About/>} />
                    </Routes>
                </div>
            </Router>
            
        ) 
    }
}