import { resetInfo, pintarInfo } from './validar-iban/ui';

const validarForm = (evento: Event) => {
  evento.preventDefault();
  const IBANForm = document.querySelector('#iban-form');
  if (IBANForm && IBANForm instanceof HTMLInputElement) {
    resetInfo();
    pintarInfo(IBANForm.value);
  }
};

const handler = () => {
  const form = document.getElementById('form');
  if (form && form instanceof HTMLFormElement) {
    form.addEventListener('submit', validarForm);
  }
};

document.addEventListener('DOMContentLoaded', handler);
