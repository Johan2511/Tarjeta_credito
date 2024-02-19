import { configureStore } from '@reduxjs/toolkit';
import formularioReducer from './FormularioSlice';  // Define este archivo más adelante

const store = configureStore({
  reducer: {
    formulario: formularioReducer,
  },
});

export default store;