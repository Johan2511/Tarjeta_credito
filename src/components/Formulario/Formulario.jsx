import { useState } from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'
import './Formulario.css'

const Formulario = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState("")
  const [nombreTarjeta, setNombreTarjeta] = useState("")
  const [fechaExpiracion , setFechaExpiracion] = useState("")
  const [numeroCcv , setNumeroCcv] = useState("")


  const onChanceNumeroTarjeta =(event) => {
    const nuevoNumeroTarjeta = event.target.value
    setNumeroTarjeta(nuevoNumeroTarjeta)
  }

  const onChanceNombreTarjeta =(event) => {
    const nuevoNombreTarjeta = event.target.value
    setNombreTarjeta(nuevoNombreTarjeta)
  }

  const onChanceFechaExpiracionTarjeta =(event) => {
    const nuevoFechaExpiracion = event.target.value
    setFechaExpiracion(nuevoFechaExpiracion)
  }

  const onChanceCcvTarjeta =(event) => {
    const nuevoNumeroCcv = event.target.value
    setNumeroCcv(nuevoNumeroCcv)
  }



  
  return (
    <>
    <form>
      <Tarjeta 
        numeroTarjeta={numeroTarjeta}
        nombreTarjeta={nombreTarjeta}
        fechaExpiracion={fechaExpiracion} 
        numeroCcv={numeroCcv} />

        <div>
          <label>Número de tarjeta</label>
          <input type="text" onChange={onChanceNumeroTarjeta} />
        </div>
        <div>
          <label>Nombre de tarjeta</label>
          <input type="text" onChange={onChanceNombreTarjeta} />
        </div>


        <section>
          <div>
            <label>Fecha de expiración</label>
            <input type="text" onChange={onChanceFechaExpiracionTarjeta} />
          </div>
          <div>
            <label>CCV</label>
            <input type="text" onChange={onChanceCcvTarjeta} />
          </div>
        </section>

    </form>

    </>
  )
}

export default Formulario