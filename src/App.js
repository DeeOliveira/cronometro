import React, { useEffect, useState } from "react";
import MostraTempo from "./component/MostraTempo";
import MostraVoltas from "./component/MostraVoltas";
import Button from "./component/Button";
import './Styles.css'


function App() {
  
  const [numVoltas,setNumVoltas] = useState(0)
  const [numTempo,setNumTempo] = useState(0)
  const [execCronometro, setExecCronometro] = useState(false)


  const addVoltas = () => {
    setNumVoltas(numVoltas+1)
  }
  
  const subVoltas = () => {
    setNumVoltas(numVoltas-1)    
  }

  const alteraStatusCronometro = () =>{
    setExecCronometro(!execCronometro)
  }

  const resetCronometro = () =>{
    setNumVoltas(0)
    setNumTempo(0)
  }


  useEffect(() =>{
    
    let timer = null
    if (execCronometro){

      timer = setInterval( () => {
         
        setNumTempo(numTempo=>numTempo+1)}, 1000
        
    
    )}
    return () => {

      if(timer){

        clearInterval(timer)
        
        }
    }}, [execCronometro])
  

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas}/>
      {numVoltas>0  && <MostraTempo tempo={Math.round(numTempo/numVoltas)}/>}
      <Button text=" + " onClick = {addVoltas}/>
      <Button text=" - " onClick = {subVoltas}/>
      <Button text={execCronometro && numVoltas>0 ?" Pausar ":" Iniciar "} onClick = {alteraStatusCronometro}/>
      <Button text=" Reiniciar " onClick = {resetCronometro}/>

    </div>
  );
}

export default App;
