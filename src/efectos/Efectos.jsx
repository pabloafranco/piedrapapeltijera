import React, { useEffect} from 'react'
import { useState } from 'react'

/*
Este NUNCA se usa
  useEffect(
    () => {console.log("A")}
    )

Se ejecuta 1 vez
useEffect(
    () => {}
    , []
    )

 Se ejectuta una vez, y cuando se cambia una dependencia   
 useEffect(
    () => {}
    , [a,b,c]
    )

Se ejectuta una vez, y cuando se desmonta se ejecuta el return
   useEffect(() => {
       return () => {}
    }
    , []
    )

*/ 

const Efectos = () => {

  const [contador, setContador] = useState(0)

  const aumentar = ()=>{
    setContador(contador+1)
  }

  const posicionMouse = ()=>{ 
    document.addEventListener("mousemove", (e)=>{
      console.log(e)
    })
   }


   
   useEffect(
    () => {
      posicionMouse() ; 

      // Esta es la funcion de saneamiento!
      return () => {
        document.removeEventListener("mousemove", posicionMouse)
      }
    }
    // console.log("Se renderiza cuando cambia la dependencia")} 
    
    , []
    )
    useEffect(
      () => {
        console.log("Se renderiza cuando cambia la dependencia")} 
      , [contador]
      )
  
  return (
    <>
      <div>Efectos</div>
      <div>Contador: {contador}</div>
      <button onClick={aumentar}>+</button>
    </>
  )
}

export default Efectos