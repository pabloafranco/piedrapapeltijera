import React, {useState} from 'react'

const Estados = () => {
    
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);

  const aumentar = () => {
    setContador(contador + 1);
    console.log(contador)  // Esto NO se puede hacer!
    // setContador((prev) => prev + 1);
  };
  const disminuir = () => {
    // setContador(contador - 1);
    setContador((prev)=>prev - 1);
  };
  const reset = () => {
    setContador(valorInicial);
  };

  return (
  <>
    <h1>Estados</h1> 
    <h3>contador: {contador}</h3>
    <button onClick={aumentar}>+1</button>
    <button onClick={disminuir}>-1</button>
    <button onClick={reset}>reset</button>

  </> );
  
}

export default Estados