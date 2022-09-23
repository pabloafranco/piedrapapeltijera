import React, { useState }  from 'react'
import { useEffect } from 'react';

const user = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20
}



const keys = Object.keys(user)

// Nombre, apellido, edad

const Ejercicio2 = () => {

  const [key, setKey] = useState(keys[0]) ;

  const changeKey = () => { 
    const newKey = keys.length -1 === keys.indexOf(key) ? 0 :  keys.indexOf(key) + 1 ;
    setKey(keys[newKey]);
  }

  useEffect( ()=>{  
    const timer = setTimeout(() => {
       changeKey() },1000) ;
       return ()=>{
        clearTimeout(timer)
       } 
  },[key]);  

  return (
    <div>
        <h1>Ejercicio2</h1>
        <h2>{user[key]}</h2>
    </div>
  )
}

export default Ejercicio2