import { esFormatoCorrecto, esIBANValido, extraerDatosBanco } from './validar-iban';
import { datosIBAN } from './modelo';

const infoIBAN = document.getElementById('info-resultado');

export const resetInfo = () => {
  if (infoIBAN && infoIBAN instanceof HTMLDivElement) {
    infoIBAN.textContent = '';
  }
};

export const crearParrafo = (contenido: string): HTMLParagraphElement => {
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.innerHTML = `${contenido}`;
  if (infoIBAN && infoIBAN instanceof HTMLDivElement) {
    infoIBAN.appendChild(nuevoParrafo);
  }
  return nuevoParrafo;
};

export const pintarParrafoEsFormatoCorrecto = (esFormatoCorrecto: boolean) => {
  if (infoIBAN && infoIBAN instanceof HTMLDivElement) {
    esFormatoCorrecto
      ? crearParrafo('El IBAN tiene un formato correcto :)')
      : crearParrafo('El IBAN no tiene un formato correcto :(');
  }
};

export const pintarParrafoEsValido = (esValido: boolean) => {
  if (infoIBAN && infoIBAN instanceof HTMLDivElement) {
    esValido ? crearParrafo(' El IBAN es válido :)') : crearParrafo(' El IBAN NO es válido :(');
  }
};

export const pintarParrafoDatosBanco = (datosIBAN: datosIBAN) => {
  if (infoIBAN && infoIBAN instanceof HTMLDivElement) {
    crearParrafo(`Banco: <strong>${datosIBAN.nombreBanco}</strong>`);
    crearParrafo(`Código Sucursal: <strong>${datosIBAN.cdgoSucursal}</strong>`);
    crearParrafo(`Dígito de Control: <strong>${datosIBAN.digControl}</strong>`);
    crearParrafo(`Número de Cuenta: <strong>${datosIBAN.numCuenta}</strong>`);
  }
};

export const pintarInfo = (IBAN: string) => {
  const formatoCorrecto = esFormatoCorrecto(IBAN);
  pintarParrafoEsFormatoCorrecto(formatoCorrecto);

  const esValido = esIBANValido(IBAN);
  if (formatoCorrecto) {
    pintarParrafoEsValido(esValido);
  }

  if (formatoCorrecto && esValido) {
    const datosIBAN: datosIBAN = extraerDatosBanco(IBAN);
    pintarParrafoDatosBanco(datosIBAN);
  }
};
