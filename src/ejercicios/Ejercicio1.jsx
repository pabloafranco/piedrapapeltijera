import React, { useState }  from 'react'

const user = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20
}

const keys = Object.keys(user)

// Nombre, apellido, edad

const Ejercicio1 = () => {

  const [key, setKey] = useState(keys[0]) ;

  const changeKey = () => { 
    const newKey = keys.length -1 === keys.indexOf(key) ? 0 :  keys.indexOf(key) + 1 ;
    setKey(keys[newKey]);
  }

  return (
    <div>
        <h1>Ejercicio1</h1>
        <h2>{user[key]}</h2>
        <button onClick={changeKey}>Cambiar dato</button>
    </div>
  )
}

export default Ejercicio1