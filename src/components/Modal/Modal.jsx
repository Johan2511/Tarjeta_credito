import {useState} from 'react';
import Formulario from '../Formulario/Formulario';
import './Modal.css';

const Modal = ({ children }) => {

  const [isOpem, setIsOpen] = useState(false)

  return (
    <article className='modal is-open'>
      <div className='modal-container'>
        <div className='modal-close'>X</div>
        {children}
        <Formulario />
      </div>
    </article>
  );
};

export default Modal;