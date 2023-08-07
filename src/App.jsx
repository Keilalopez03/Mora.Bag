
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import ItemDetailConteiner from './Components/ItemDetailContainer'
import Cart from './Components/Cart'
import ItemListContainer from './Components/ItemListContainer'



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      < Routes>

        <Route exact path='/category/:category' elements={<ItemListContainer />} />
        <Route exact path='"/item/:id"' element={< ItemDetailConteiner />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />



      </Routes>

    </BrowserRouter>
  )
}
export default App
