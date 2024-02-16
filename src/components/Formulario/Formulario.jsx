import { useState } from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'
import './Formulario.css'

const Formulario = () => {
  const [numeroTarjeta, setNumerodeTarjeta] = useState(0)
  const [nombreTarjeta, setNombreTarjeta] = useState("")
  const [fechaExpiracion , setFechaExpiracion] = useState("")
  const [numeroCcv , setNumeroCcv] = useState("")
  
  return (
    <>
      <Tarjeta numeroCcv={numeroCcv} 
        numeroTarjeta={numeroTarjeta}
        nombreTarjeta={nombreTarjeta}
        fechaExpiracion={fechaExpiracion} />

        <div>
          <label>Número de tarjeta</label>
          <input type="text" onChange={} />
        </div>
        <div>
          <label>Nombre de tarjeta</label>
          <input type="text" onChange={} />
        </div>
        <div>
          <label>Fecha de expiración</label>
          <input type="text" onChange={} />
        </div>
        <div>
          <label>CCV</label>
          <input type="text" onChange={} />
        </div>

    </>
  )
}

export default Formulario