
import './App.css'
import Navbar from './COMPONENT/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shope from './Pages/Shope'
import ShopeCtegory from './Pages/ShopeCtegory'
import Footer from './COMPONENT/Footer/Footer'
import men_banner from './COMPONENT/ASSET/mennewbanner.avif'
import women_banner from './COMPONENT/ASSET/WOMENBANNER.avif'
import kid_banner from './COMPONENT/ASSET/KIDSBANNER.avif'
import LoginSingup from './Pages/LoginSingup'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
function App() {


  return (
    <>
    <div>

      <BrowserRouter>

<Navbar/>
<Routes>
  <Route path='/'  element = {<Shope/>}/>
  <Route path='mens'  element = {<ShopeCtegory banner = {men_banner} category = "men" />}/>
  <Route path='womens'  element = {<ShopeCtegory  banner = {women_banner} category = "women"/>}/>
  <Route path='kids'  element = {<ShopeCtegory banner = {kid_banner} category = "kidS" />}/>
 <Route path='/product' element = {<Product/>}>
<Route path=':productId' element = {<Product/>} />
 </Route>
 
 <Route path='/card'  element = {<Cart/>}/>
 <Route path='/Login'  element = {<LoginSingup/>}/>


</Routes>  

</BrowserRouter>
<Footer/>
</div>
          </>
  )
}

export default App
