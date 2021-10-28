import React from "react"

const MostraTempo = (props) =>{

    const tempo = props.tempo
    const minutos = Math.round(tempo/60)
    const segundos = tempo%60
    const minutosstr = minutos<10?'0'+minutos:minutos
    const segundossrt = segundos<10?'0'+segundos:segundos
    
    return (
        <p className='tempo'><span>{`${minutosstr} : ${segundossrt}`}</span> <br/> tempo</p>
    )
  }

  export default MostraTempo;