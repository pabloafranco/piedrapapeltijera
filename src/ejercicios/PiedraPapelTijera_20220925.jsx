import React, {  useState }  from 'react'
import { useEffect } from 'react'
import './PiedraPapelTijera.css'

const juego = ["Piedra", "Papel", "Tijera"]
const ganaHumano = ['02', '10', '21']

let textoEligioHumano = ''
let textoEligioIA = ''

// Nombre, apellido, edad

const PiedraPapelTijera = () => {

  const [triunfador, setTriunfador] = useState('')
  const [canIA, setCanIA] = useState(0) ;
  const [canHumano, setCanHumano] = useState(0) ;

  const cambiaValor =  (eligioHumano) => { 

  const eligioIA =( parseInt(Math.random() * 10 ) ) % 3 
  console.log('eligioIA: ' + eligioIA)
  console.log('cambiaValor: ' + eligioHumano)

  textoEligioHumano=juego[eligioHumano]
  textoEligioIA=juego[eligioIA]

    
  if (eligioHumano===eligioIA) 
    {
    setTriunfador("Empate")
    } else {
    const comparaElecciones= eligioHumano.toString() + eligioIA.toString()
    const found = ganaHumano.includes(comparaElecciones);
    
    console.log('comparaElecciones: '+comparaElecciones)
    console.log(found)

        if (found) {
            setTriunfador("Gano Humano!!!")
            setCanHumano(canHumano+1)

        }else{
            setTriunfador("Gano IA!!!")
            setCanIA(canIA+1);
        } 
    }

  }    
        
  
  
  useEffect(()=>{
    console.log( `Triunfador: ${triunfador}` )

  },[triunfador])
  
    


  return (
    <div>
        <h1>Piedra Papel Tijera</h1>
        <div >
        <h2>
            <p className='resultado: '>Resultado: {triunfador} </p>
        </h2>
        <div  className='salida'>
        <h2 className='winner'>
            <p className='serHumano'>Tu eleccion: {textoEligioHumano}</p>
        </h2>
        <h2 className='winner'>
            <p className='IA'>IA: {textoEligioIA}</p>
        </h2>
        </div>
        </div>
        <div>
            <button onClick={()=>cambiaValor(0)} className='botones'>Piedra</button>
            <button onClick={()=>cambiaValor(1)} className='botones'>Papel</button>
            <button onClick={()=>cambiaValor(2)} className='botones'>Tijera</button>
        </div>
        <footer className="resultados">
            <p>Humano: {canHumano}  -   IA: {canIA} </p> 
        </footer>
    </div>
  )
}

export default PiedraPapelTijera

