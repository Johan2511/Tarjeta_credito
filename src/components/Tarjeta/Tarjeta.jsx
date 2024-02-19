import { useEffect ,useState } from 'react';
import { 
    FuncionNumeroTarjeta,
    FuncionIdentificarTipoTarjeta,
    FuncionVerificarVencimientoFecha,
    FuncionFormatMesAño, 
} from '../Helpers/helpers';
import ImgChip from '../../assets/tarjeta-de-credito.png';
import ImgVisa from '../../assets/visa.png'
import ImgMasterCard from '../../assets/mastercard.png'
import ImgAmericanExpress from '../../assets/american-express.png'
import './Tarjeta.css';

const Tarjeta = ({
    numeroTarjeta,
    nombreTarjeta,
    fechaExpiracion,
    numeroCcv
}) => {

const [changePosition , setChangePosition] = useState(false);
const [numeroTarjetaFormat , setNumeroTarjetaFormat] = useState("");
const [fechaExpiracionFormat , setfechaExpiracionFormat] = useState("");




useEffect ( ()=> {
    if (numeroCcv.length > 0) {
        setChangePosition(true)
    } else if (numeroCcv.length === 0) {
        setChangePosition(false)
    }
},
[numeroCcv])

useEffect ( () => {
    setNumeroTarjetaFormat(FuncionNumeroTarjeta(numeroTarjeta))
}, [numeroTarjeta])

useEffect ( () => {
    setfechaExpiracionFormat(FuncionFormatMesAño(fechaExpiracion))
}, [fechaExpiracion])



  return (
    <>
        <div 
        onClick={() => setChangePosition(!changePosition)} 
        className={`flip-card${changePosition ? " Voltear" : ""}`}>
            <div className='flip-card-inner'>

                {/* Parte Delantera de la tarjeta */}

            <div className='Card-front'>
            <div className="brand-logo">
            {FuncionIdentificarTipoTarjeta(numeroTarjeta) === "Visa" ? (
              <img className="ImageLogo" src={ImgVisa} alt="logo" />
            ) : FuncionIdentificarTipoTarjeta(numeroTarjeta) ===
              "MasterCard" ? (
              <img className="ImageLogo" src={ImgMasterCard} alt="logo" />
            ) : FuncionIdentificarTipoTarjeta(numeroTarjeta) ===
              "American Express" ? (
              <img className="ImageLogo" src={ImgAmericanExpress} alt="logo" />
            ) : (
              <div className="ImageLogo" />
            )}
          </div>


                <img  className='chip' src= {ImgChip} alt="chip" />

                <div className='Data'></div>
                <div className='groups'>
                    <p className='Label'>Número de la Tarjeta</p>
                    <p className='Number'>{numeroTarjeta && numeroTarjeta.length > 0 ? numeroTarjetaFormat : "#### #### #### ####"}</p>
                </div>

                <div className='FlexBox'>
                    <div className='groups'>
                        <p className='Label'>Nombre de La Tarjeta</p>
                        <p className='Name'>{nombreTarjeta && nombreTarjeta.length > 0 ? nombreTarjeta :"JOHN DOE"}</p>
                    </div>
                    <div className='groups'>
                        <p className='Label'>Expiración</p>
                        <p className='Expiration'>{fechaExpiracion && fechaExpiracion.length > 0 ? fechaExpiracionFormat : "MM/AA"}</p>
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