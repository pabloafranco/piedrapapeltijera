import React, { useMemo, useState }  from 'react'
import './PiedraPapelTijera.css'

const juego = ["Piedra", "Papel", "Tijera"]

const ganaHumano = ['02', '10', '21']


// Nombre, apellido, edad

const PiedraPapelTijera = () => {

  const [triunfador, setTriunfador] = useState(null)
  const [humano, setHumano] = useState(null) ;
  const [ia, setIa] = useState(null) ;
  const [canHumano, setCanHumano] = useState(0) ;
  const [canIA, setCanIA] = useState(0) ;



  const cambiaValor = (nuevoValor) => { 
    console.log('NuevoValor: ' + nuevoValor)
    setHumano(nuevoValor);

    const newIA =( parseInt(Math.random() * 10 ) ) % 3 
    console.log('newIA: ' + newIA)
    setIa(newIA)
    ganador()
        
  }

  const  ganador = useMemo(() => {
    console.log( ' Humano: ' + humano )
    console.log('IA: '+ia)
    
    if ( humano === null) return
    if (humano===ia) 
        {
        setTriunfador("Empate")
    } else {
        const comparaElecciones= humano.toString() + ia.toString()
        const found = ganaHumano.includes(comparaElecciones);
        
        console.log('comparaElecciones: '+comparaElecciones)
        console.log(found)

        if (found) {
            setTriunfador("Gano Humano!!!")
           // incrementCount();

        }else{
            setTriunfador("Gano IA!!!")
            //setCanIA(canIA+1);
        } 
    }
  }

    , [humano, ia, canHumano, canIA]   
  )



  return (
    <div>
        <h1>Piedra Papel Tijera</h1>
        <div >
        <h2>
            <p className='resultado: '>Resultado: {triunfador} </p>
        </h2>
        <div  className='salida'>
        <h2 className='winner'>
            <p className='serHumano'>Tu eleccion: {juego[humano]}</p>
        </h2>
        <h2 className='winner'>
            <p className='IA'>IA: {juego[ia]}</p>
        </h2>
        </div>
        </div>
        <div>
            <button onClick={()=>cambiaValor(0)} className='botones'>Piedra</button>
            <button onClick={()=>cambiaValor(1)} className='botones'>Papel</button>
            <button onClick={()=>cambiaValor(2)} className='botones'>Tijera</button>
        </div>
    </div>
  )
}

export default PiedraPapelTijera