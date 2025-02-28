import { useState } from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Navbar/>
           <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/cart' element={<Cart/>} />
           </Routes>
       
       </BrowserRouter>
    </>
    
  )
}

export default App
