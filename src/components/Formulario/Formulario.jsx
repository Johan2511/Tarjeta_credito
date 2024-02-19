import { useDispatch, useSelector } from 'react-redux';
import {
  actualizarCampo,
  iniciarCarga,
  finalizarCarga,
  actualizarResultadoValidacion,
} from '../../Redux/FormularioSlice';
import Button from '../Button/Button';
import Tarjeta from '../Tarjeta/Tarjeta';
import Spinner from '../Spinner/Spinner';
import './Formulario.css'

const Formulario = () => {
  const dispatch = useDispatch();
  const {
    numeroTarjeta,
    nombreTarjeta,
    fechaExpiracion,
    numeroCcv,
    resultadoValidacion,
    cargando,
  } = useSelector(state => state.formulario);


  const onChanceNumeroTarjeta = (event) => {
    dispatch(actualizarCampo({ campo: 'numeroTarjeta', valor: event.target.value }));
  };

  const onChanceNombreTarjeta = (event) => {
    dispatch(actualizarCampo({ campo: 'nombreTarjeta', valor: event.target.value }));
  };

  const onChanceFechaExpiracionTarjeta = (event) => {
    dispatch(actualizarCampo({ campo: 'fechaExpiracion', valor: event.target.value }));
  };

  const onChanceCcvTarjeta = (event) => {
    dispatch(actualizarCampo({ campo: 'numeroCcv', valor: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Iniciar el spinner
    dispatch(iniciarCarga());

    // Simular la validación del backend después de un tiempo (para simular una solicitud asíncrona)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulamos la validación del backend
    const esValidacionExitosa =
    numeroTarjeta.length >= 12 && numeroTarjeta.length <= 16 &&
    nombreTarjeta.length > 0 &&
    fechaExpiracion.length === 6 &&
    numeroCcv.length === 3;

    // Actualizamos el estado para reflejar el resultado de la validación
    dispatch(actualizarResultadoValidacion(esValidacionExitosa));

    // Detener el spinner
    dispatch(finalizarCarga());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Tarjeta
          numeroTarjeta={numeroTarjeta}
          nombreTarjeta={nombreTarjeta}
          fechaExpiracion={fechaExpiracion}
          numeroCcv={numeroCcv}
        />

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
            <input type="text" maxLength={6} onChange={onChanceFechaExpiracionTarjeta} />
          </div>
          <div className='container-input'>
            <label>CCV</label>
            <input type="text" maxLength={3} onChange={onChanceCcvTarjeta} />
          </div>
        </div>

        <Button text={"Enviar"} />
      </form>

      {cargando && <Spinner />}

      {resultadoValidacion !== null && !cargando && (
        <div className={` text-center mt-4 p-4 ${resultadoValidacion ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {resultadoValidacion ? '¡La validación fue exitosa!' : 'La validación falló. Verifica tus datos.'}
        </div>
      )}
    </>
  );
}

export default Formulario;