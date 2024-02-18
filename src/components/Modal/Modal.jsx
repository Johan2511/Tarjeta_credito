import Formulario from '../Formulario/Formulario';
import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {

  return (
    <article className={`modal ${isOpen && "is-open"}`}>
      <div className='modal-container'>
        <div className='modal-close' onClick={closeModal}>X</div>
        {children}
        <Formulario isOpen={isOpen} />
      </div>
    </article>
  );
};

export default Modal;