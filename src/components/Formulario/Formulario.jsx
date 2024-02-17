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

        <div className='Container_input_numero'>
          <div className='container-input'>
            <label>Número de tarjeta</label>
            <input type="text" maxLength={16} onChange={onChanceNumeroTarjeta} />
          </div>
          <div className='container-input'>
            <label>Nombre de tarjeta</label>
            <input type="text" onChange={onChanceNombreTarjeta} />
          </div>
        </div>

        <div className='Container_input_fecha_ccv'>
          <div className='container-input'>
            <label>Fecha de expiración</label>
            <input type="text" maxLength={5} onChange={onChanceFechaExpiracionTarjeta} />
          </div>
          <div className='container-input'>
            <label>CCV</label>
            <input type="text" maxLength={3} onChange={onChanceCcvTarjeta} />
          </div>
        </div>

          <button>Enviar</button>

    </form>

    </>
  )
}

export default Formulario