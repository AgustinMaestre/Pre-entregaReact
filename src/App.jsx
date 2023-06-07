import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Estamos dando el primer paso para crear un nuevo E-Commerce"}/>
    </>
  )
}

export default App