import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "../pages/home/home"
import CountriesOrdered from "../pages/countries/countries"
import Char from '../pages/char/char'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/countries' element={<CountriesOrdered/>}/>
        <Route path='/characters/:id' element={<Char/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router