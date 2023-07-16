
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting="bienvenidos a Mora Bag"
      />
    </>
  )
}

export default App