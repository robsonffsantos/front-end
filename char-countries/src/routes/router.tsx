import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "../pages/home/home"
import Countries from "../pages/countries/countries"
import Char from '../pages/char/char'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/countries' element={<Countries/>}/>
        <Route path='/characters/' element={<Char/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router