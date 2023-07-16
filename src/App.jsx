
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

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