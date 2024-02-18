import Formulario from '../Formulario/Formulario';
import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {

  const handleModalContainerClick = e => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        <div className='modal-close' onClick={closeModal}>X</div>
        {children}
        <Formulario isOpen={isOpen} />
      </div>
    </article>
  );
};

export default Modal;