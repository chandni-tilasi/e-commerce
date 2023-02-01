import React from 'react'
import Home from './Components/Home'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Card from './Components/Card';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import ItemState from './state/ItemState';
function App() {
  return (
    
    <div>
      <ItemState>
      <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/productdetails/:id' element={<ProductDetails/>} />
      </Routes>
      </Router>
   
     </ItemState>
    </div>
  )
}

export default App