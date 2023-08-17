import React, {useState} from 'react'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");
    const [previousSearches, setPreviousSearches] = useState([]);

    // handlers son las funciones que se ejecutan en los eventos

    const handleSubmit = (e) => { // en el handleSubmit hacemos las validaciones
        e.preventDefault();
        console.log("Submit");
        if ((inputValue.trim().length <= 3) || (inputValue === "")) {
            return alert("Debes buscar correctamente")
        }

        if (previousSearches.includes(inputValue)) {
          return alert(`Ya se realizó la búsqueda sobre "${inputValue}"`);
        }


        setCategories((data) => [inputValue, ...data] ) // de esa manera solo queda el que busco, si quiero que se queden las busquedas anteriores [inputValue, ...data]
        setPreviousSearches((prevSearches) => [inputValue, ...prevSearches]);
        setInputValue("")

    }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <input value={inputValue} type="text" placeholder='Buscar' onChange={(e) => setInputValue((e.target.value).toUpperCase())} />
        </form>
    </>

  )
}

export default AddCategory