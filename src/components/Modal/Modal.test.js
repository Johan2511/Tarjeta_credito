import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

jest.mock('../../assets/tarjeta-de-credito.png', () => 'path/to/mock/image.png');
jest.mock('../../components/Tarjeta/Tarjeta.css', () => ({}));

test("Modal renders correctly", () => {
  // Arrange
  const closeModalMock = jest.fn(); // Mock de la función de cierre

  // Act
  const { getByTestId, getByText } = render(
    <Modal isOpen={true} closeModal={closeModalMock}>
      <p data-testid="modal-content">Contenido del modal</p>
    </Modal>
  );

  // Assert
  const modalContainer = getByTestId("modal-container");
  const modalContent = getByTestId("modal-content");

  // Verifica que el modal y su contenido estén presentes
  expect(modalContainer).toBeInTheDocument();
  expect(modalContent).toBeInTheDocument();
  
  // Simula hacer clic en el botón de cerrar modal
  fireEvent.click(getByText("Cerrar"));
  
  // Verifica que la función de cierre se haya llamado
  expect(closeModalMock).toHaveBeenCalled();
  
  // Verifica que el modal se cierra al hacer clic en el contenedor del modal
  fireEvent.click(modalContainer);
  expect(closeModalMock).toHaveBeenCalledTimes(2); // Ajusta el recuento según sea necesario
});