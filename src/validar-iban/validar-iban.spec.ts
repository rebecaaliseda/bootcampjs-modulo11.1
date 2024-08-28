import { esFormatoCorrecto, esIBANValido } from './validar-iban';

describe('esFormatoCorrecto', () => {
  test.each([
    ['ES21 1465 0100 72 2030876293', true],
    ['ES2114650100722030876293', true],
    ['ES21-1465-0100-72-2030876293', true],
    ['ES21_1465_0100_72_2030876293', false],
    ['ES21.1465.0100.72.2030876293', false],
    ['ES211465010072203087', false],
    ['2114650100722030876293', false],
  ])(
    'Deberia devolver si el formato del IBAN es correcto o no en cada caso',
    (iban: string, expected: boolean) => {
      expect(esFormatoCorrecto(iban)).toBe(expected);
    }
  );
});

describe('esIBANValido', () => {
  test.each([
    ['ES6621000418401234567891', true],
    ['ES2114650100722030876293', false],
  ])(
    'Deberia devolver si el IBAN es válido o no en cada caso',
    (iban: string, expected: boolean) => {
      expect(esIBANValido(iban)).toBe(expected);
    }
  );
});
