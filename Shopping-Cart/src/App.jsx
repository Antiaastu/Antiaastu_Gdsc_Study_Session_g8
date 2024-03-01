import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingCart from './Shop/ShoppingCart';
import './Shop/Shop.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="App">
      <div className="shopping-cart-container">
        <ShoppingCart />
        
      </div>
    </div>
  
    </>
  )
}

export default App
