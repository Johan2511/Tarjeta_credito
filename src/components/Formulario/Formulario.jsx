import { useState } from 'react'
import Button from '../Button/Button'
import Tarjeta from '../Tarjeta/Tarjeta'
import './Formulario.css'

const Formulario = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState("")
  const [nombreTarjeta, setNombreTarjeta] = useState("")
  const [fechaExpiracion , setFechaExpiracion] = useState("")
  const [numeroCcv , setNumeroCcv] = useState("")
  const [resultadoValidacion, setResultadoValidacion] = useState(null);

  const simularValidacionBackend = () => {
    // Simulación simple: verifica que el número de tarjeta tenga 16 dígitos
    // y que el CCV tenga 3 dígitos. 
    const datosTarjetaValida = {
      numeroTarjeta: '1234567812345678', // Cambia esto con un número de tarjeta real
      nombreTarjeta: 'Johan Mauricio Peñuela Hidalgo', // Cambia esto con un nombre real
      fechaExpiracion: '12/25', // Cambia esto con una fecha de expiración real
      numeroCcv: '123', // Cambia esto con un CCV real
    };

    const esValido =
      numeroTarjeta === datosTarjetaValida.numeroTarjeta &&
      nombreTarjeta === datosTarjetaValida.nombreTarjeta &&
      fechaExpiracion === datosTarjetaValida.fechaExpiracion &&
      numeroCcv === datosTarjetaValida.numeroCcv;

    return esValido;
  };


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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulamos la validación del backend
    const esValidacionExitosa = simularValidacionBackend();

    // Actualizamos el estado para reflejar el resultado de la validación
    setResultadoValidacion(esValidacionExitosa);
  };

  
  return (
    <>
    <form onSubmit={handleSubmit}>
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

          <Button text={"Enviar"}/>

    </form>
    {resultadoValidacion !== null && (
        <div className={` text-center mt-4 p-4 ${resultadoValidacion ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {resultadoValidacion ? '¡La validación fue exitosa!' : 'La validación falló. Verifica tus datos.'}
        </div>
      )}
    </>
  )
}

export default Formulario