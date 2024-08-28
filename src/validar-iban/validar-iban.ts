import { datosIBAN, patronIBAN, Bancos } from './modelo';
import { isValidIBAN } from 'ibantools';

export const esFormatoCorrecto = (IBAN: string): boolean => {
  const patronIBAN = /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;
  return patronIBAN.test(IBAN);
};

export const esIBANValido = (IBAN: string): boolean => {
  const nuevoIBAN = IBAN.replace(/(\s)|(-)/g, '');
  return isValidIBAN(nuevoIBAN);
};

export const extraerNombreBanco = (codigoBanco: string) => {
  const nombreBanco = Bancos.get(codigoBanco);
  return nombreBanco;
};

export const extraerDatosBanco = (IBAN: string): datosIBAN => {
  let datosIBAN: datosIBAN = {
    nombreBanco: '',
    cdgoSucursal: '',
    digControl: '',
    numCuenta: '',
  };

  const coincidencia = patronIBAN.exec(IBAN);

  if (coincidencia) {
    const { cdgoBanco, cdgoSucursal, digControl, numCuenta } = coincidencia.groups as any;
    const nombreBanco = extraerNombreBanco(cdgoBanco);
    if (nombreBanco) {
      datosIBAN.nombreBanco = nombreBanco;
    }
    datosIBAN.cdgoSucursal = cdgoSucursal;
    datosIBAN.digControl = digControl;
    datosIBAN.numCuenta = numCuenta;
  } else {
    throw new Error('Error al obtener el nombre del banco');
  }

  return datosIBAN;
};
