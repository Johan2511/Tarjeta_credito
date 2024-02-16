import { useEffect ,useState } from 'react';
import ImgChip from '../../assets/tarjeta-de-credito.png';
import './Tarjeta.css';

const Tarjeta = ({
    numeroTarjeta,
    nombreTarjeta,
    fechaExpiracion,
    numeroCcv
}) => {

const [changePosition , setChangePosition] = useState(false);



useEffect ( ()=> {
    if (numeroCcv.length > 0) {
        setChangePosition(true)
    } else if (numeroCcv.length === 0) {
        setChangePosition(false)
    }
},
[numeroCcv])



  return (
    <>
        <div 
        onClick={() => setChangePosition(!changePosition)} 
        className={`flip-card${changePosition ? " Voltear" : ""}`}>
            <div className='flip-card-inner'>

                {/* Parte Delantera de la tarjeta */}

            <div className='Card-front'>
                <div className='brand-logo'></div>

                <img  className='chip' src= {ImgChip} alt="chip" />

                <div className='Data'></div>
                <div className='groups'>
                    <p className='Label'>Número de la Tarjeta</p>
                    <p className='Number'>{numeroTarjeta && numeroTarjeta.length > 0 ? numeroTarjeta : "#### #### #### ####"}</p>
                </div>

                <div className='FlexBox'>
                    <div className='groups'>
                        <p className='Label'>Nombre de La Tarjeta</p>
                        <p className='Name'>{nombreTarjeta && nombreTarjeta.length > 0 ? nombreTarjeta :"JOHN DOE"}</p>
                    </div>
                    <div className='groups'>
                        <p className='Label'>Expiración</p>
                        <p className='Expiration'>{fechaExpiracion && fechaExpiracion.length > 0 ? fechaExpiracion : "MM/AA"}</p>
                    </div>
                </div>
            </div>

            {/* Parte trasera de la tarjeta */}

            <div className='Card-back'>
                <div className='strip'></div>
                <div className='Container_CCV'>
                    <div className='mstrip'>{nombreTarjeta && nombreTarjeta.length > 0 ? nombreTarjeta :"JOHN DOE"}</div>
                    <p className='ccv'>{numeroCcv && numeroCcv.length > 0 ? numeroCcv : "---"} </p>
                </div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Tarjeta