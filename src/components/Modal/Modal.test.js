import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Componente Modal', () => {
  it('renderiza el modal correctamente', () => {
    const closeModalMock = jest.fn();

    const { getByText, getByTestId } = render(
      <Modal isOpen={true} closeModal={closeModalMock}>
        <div data-testid="modal-content">Contenido del Modal</div>
      </Modal>
    );

    // Verifica si el modal se renderiza con la clase "is-open"
    const modalElement = getByTestId('modal-content');
    expect(modalElement).toBeInTheDocument();

    // Verifica si closeModal se llama al hacer clic en el botón de cerrar
    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    expect(closeModalMock).toHaveBeenCalled();
  });
});