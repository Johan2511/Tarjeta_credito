import { createSlice } from '@reduxjs/toolkit';

const formularioSlice = createSlice({
  name: 'formulario',
  initialState: {
    numeroTarjeta: '',
    nombreTarjeta: '',
    fechaExpiracion: '',
    numeroCcv: '',
    resultadoValidacion: null,
    cargando: false,
  },
  reducers: {
    actualizarCampo: (state, action) => {
      const { campo, valor } = action.payload;
      state[campo] = valor;
    },
    iniciarCarga: state => {
      state.cargando = true;
    },
    finalizarCarga: state => {
      state.cargando = false;
    },
    actualizarResultadoValidacion: (state, action) => {
      state.resultadoValidacion = action.payload;
    },
  },
});

export const {
  actualizarCampo,
  iniciarCarga,
  finalizarCarga,
  actualizarResultadoValidacion,
} = formularioSlice.actions;

export default formularioSlice.reducer;


// const simularValidacionBackend = () => {
//     // Simulación simple: verifica que el número de tarjeta tenga 16 dígitos
//     // y que el CCV tenga 3 dígitos. 
//     const datosTarjetaValida = {
//       numeroTarjeta: '1234567812345678', // Cambia esto con un número de tarjeta real
//       nombreTarjeta: 'Johan Mauricio Peñuela Hidalgo', // Cambia esto con un nombre real
//       fechaExpiracion: '12/25', // Cambia esto con una fecha de expiración real
//       numeroCcv: '123', // Cambia esto con un CCV real
//     };

//     const esValido =
//       numeroTarjeta === datosTarjetaValida.numeroTarjeta &&
//       nombreTarjeta === datosTarjetaValida.nombreTarjeta &&
//       fechaExpiracion === datosTarjetaValida.fechaExpiracion &&
//       numeroCcv === datosTarjetaValida.numeroCcv;

//     return esValido;