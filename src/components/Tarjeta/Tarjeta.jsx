import ImgChip from '../../assets/tarjeta-de-credito.png'
import './Tarjeta.css'

const Tarjeta = () => {
  return (
    <>
        <div className='flip-card'>
            <div className='flip-card-inner'>

                {/* Parte Delantera de la tarjeta */}

            <div className='Card-front'>
                <div className='brand-logo'></div>

                <img  className='chip' src= {ImgChip} alt="chip" />

                <div className='Data'></div>
                <div className='groups'>
                    <p className='Label'>Número de la Tarjeta</p>
                    <p className='Number'>#### #### #### ####</p>
                </div>

                <div className='FlexBox'>
                    <div className='groups'>
                        <p className='Label'>Nombre de La Tarjeta</p>
                        <p className='Name'>JOHN DOE</p>
                    </div>
                    <div className='groups'>
                        <p className='Label'>Expiración</p>
                        <p className='Expiration'>MM/AA</p>
                    </div>
                </div>
            </div>

            {/* Parte trasera de la tarjeta */}

            <div className='Card-back'>
                <div className='strip'></div>
                <div className='Container_CCV'>
                    <div className='mstrip'></div>
                    <p className='ccv'>---</p>
                </div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Tarjeta