import { useState, useEffect } from 'react'
import './sass/main.scss'
import AddCategory from './components/AddCategory'
import { getGifs } from './helpers/getGifs'
import GIfGrid from './components/GIfGrid'

function App() {
  const [categories, setCategories] = useState([""] ) // podemos poner un valor por defecto dentro de las comillas y cada vez que recargue aparecerá
  // const [count, setCount] = useState(0)

  // useEffect(() => { // este callback se ejecuta cuando se monta el componente
  //   console.log("El contador ha cambiado", count);
  //   const interval = setInterval(() => {
  //     console.log("Esto se ejecuta cada 1 seg.");
  //   }, 1000);
  
  //   return () => {
  //     // cleaner o limpiador porque despues que haga lo que hago arriba. se ejecuta cuando se desmonta el componente
  //     clearInterval(interval)
  //   }
  // }, [count]) // el array de dependencias. cada vez que cambie el valor de count se va a ejecutar el useEffect porque está count en el array de dependencias
  // // si no tenemos dependencias dejamos el array solo. se ejecuta cuando hay un cambio en un estado (update)
  

  return (
    <>
      <h1>Bienvenido a GIFs App</h1>
      <h3>¡Somos el buscador de GIFs más grande del mundo!</h3>
      <AddCategory setCategories ={setCategories}  />
      <button className='cleaner' onClick={() => {setCategories([""]); setInputValue("");}} >Limpiar GIFs</button>
      <ol>
        {categories.map((category) => (
          <GIfGrid category= {category} key = {category} />
        ))}
      </ol>
    </>
  )
}

export default App
