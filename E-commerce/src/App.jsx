//App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {Navbar} from "./components/Navbar"
import {Shop} from "./pages/shop/Shop.jsx"
import {Cart} from "./pages/cart/Cart.jsx" 
import {ShopContextProvider} from "./context/shop-context"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <ShopContextProvider>
        <Router>
            <Navbar/>
           <Routes>
             <Route path="/" element={<Shop/>}/> 
             <Route path="/cart" element={<Cart/>}/>
           </Routes>
        </Router>
        </ShopContextProvider>
      </div>
    </>
  )
}

export default App
