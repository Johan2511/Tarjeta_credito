import Modal from '../Modal/Modal';
import { useModal } from '../Modal/UseModal';
import Button from '../Button/Button';



const Card = () => {

    const [isOpen, openModal, closeModal] = useModal(false);

    return (
        <div className="flex flex-col items-center bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                    </div>
                    <Modal isOpen={isOpen} closeModal={closeModal}/>
            </figure>
            <p className="flex justify-between w-full">
            <span className="text-sm font-light">Headphone</span>
            <span className="text-lg font-medium">$300</span>
            </p>
            <Button onClick={openModal} text={"Pagar con tarjeta de crédito"}/>
        </div>
    )
}

export default Card