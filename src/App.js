import React,{useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Contact from './pages/Contact'

// https://flatuicolors.com/palette/se

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
    
  );
}

export default App;
