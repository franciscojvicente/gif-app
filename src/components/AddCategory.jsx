import React, {useState} from 'react'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    // handlers son las funciones que se ejecutan en los eventos

    const handleSubmit = (e) => { // en el handleSubmit hacemos las validaciones
        e.preventDefault();
        console.log("Submit");
        if ((inputValue.trim().length <= 3) || (inputValue === "")) {
            return alert("Debes buscar correctamente")
        }

        // const isGifSearched = setCategories.find((input) => {
        //     if (inputValue === input) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // })
        // if (isGifSearched == true) {
        //     return(alert("Ya se ha realizado dicha busqueda. Intente nuevamente"));
        // }


        setCategories((data) => [inputValue, ...data] ) // de esa manera solo queda el que busco, si quiero que se queden las busquedas anteriores [inputValue, ...data]
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