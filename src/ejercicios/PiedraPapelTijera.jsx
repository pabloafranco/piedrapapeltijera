import React, {  useState }  from 'react'
import { useEffect } from 'react'
import './PiedraPapelTijera.css'

const juego = ["Piedra", "Papel", "Tijera"]
const ganaHumano = ['02', '10', '21']


const PiedraPapelTijera = () => {

  const [triunfador, setTriunfador] = useState('')
  const [seleccion, setSeleccion] = useState({EligioHumano: null, EligioIA: null})    ;
  const [totales, setTotales] = useState({CanIA: 0, CanHumano: 0})    ;
  

  const cambiaValor =  (eligioHumano) => { 

  const eligioIA =( parseInt(Math.random() * 10 ) ) % 3 
  console.log('eligioIA: ' + eligioIA)
  console.log('eligioHumano: ' + eligioHumano)

  setSeleccion({ EligioHumano: eligioHumano, EligioIA: eligioIA } )
  
  }    
        
  
  useEffect(()=>{
    if (seleccion.EligioHumano === null) return

//    console.log('seleccion.EligioIA: ' + seleccion.EligioIA)
//    console.log('seleccion.EligioHumano: ' + seleccion.EligioHumano)
    if (seleccion.EligioHumano === seleccion.EligioIA) 
      {
      setTriunfador("Empate")
      } else {
      const comparaElecciones= String(seleccion.EligioHumano) + String(seleccion.EligioIA)
      const found = ganaHumano.includes(comparaElecciones);
      
      //console.log('comparaElecciones: '+comparaElecciones)
      // console.log(found)
  
          if (found) {
              setTriunfador("Gano Humano!!!")
              setTotales({ CanIA: totales.CanIA, CanHumano: totales.CanHumano+1 })
         //     console.log("CanIA:" +  totales.CanIA)
  
          }else{
              setTriunfador("Gano IA!!!")
              setTotales({ CanIA: totales.CanIA+1, CanHumano: totales.CanHumano })
           //   console.log("CanHumano:" +  totales.CanHumano)
          } 
      }
  
  },[seleccion])
  
    

  return (
    <div>
        <h1>Piedra Papel Tijera</h1>
        <div >
        <h2>
            <p className='resultado: '>Resultado: {triunfador} </p>
        </h2>
        <div  className='salida'>
        <h2 className='winner'>
            <p className='serHumano'>Tu eleccion: {juego[seleccion.EligioHumano]}</p>
        </h2>
        <h2 className='winner'>
            <p className='IA'>IA: {juego[seleccion.EligioIA]}</p>
        </h2>
        </div>
        </div>
        <div>
            <button onClick={()=>cambiaValor(0)} className='botones'>Piedra</button>
            <button onClick={()=>cambiaValor(1)} className='botones'>Papel</button>
            <button onClick={()=>cambiaValor(2)} className='botones'>Tijera</button>
        </div>
        <footer className="resultados">
            <p>Humano: {totales.CanHumano}  -   IA: {totales.CanIA} </p> 
        </footer>
    </div>
  )
}

export default PiedraPapelTijera

