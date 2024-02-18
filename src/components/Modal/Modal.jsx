import Formulario from '../Formulario/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {

  const handleModalContainerClick = e => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        <div className='modal-close' onClick={closeModal}>
          <FontAwesomeIcon icon={faClose} />
        </div>
        {children}
        <Formulario isOpen={isOpen} />
      </div>
    </article>
  );
};

export default Modal;