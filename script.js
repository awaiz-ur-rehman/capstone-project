import { validateForm } from './form-validation.js';

const form = document.querySelector('#settings-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const successMessage = document.querySelector('#form-success');

function clearFieldError(input, errorElement) {
  input.classList.remove('is-invalid');
  input.setAttribute('aria-invalid', 'false');
  errorElement.textContent = '';
}

function showFieldError(input, errorElement, message) {
  input.classList.add('is-invalid');
  input.setAttribute('aria-invalid', 'true');
  errorElement.textContent = message;
}

function clearSuccessMessage() {
  successMessage.textContent = '';
}

function handleFieldInput(input, errorElement) {
  if (input.value.trim()) {
    clearFieldError(input, errorElement);
    clearSuccessMessage();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const result = validateForm({
    name: nameInput.value,
    email: emailInput.value,
  });

  clearFieldError(nameInput, nameError);
  clearFieldError(emailInput, emailError);
  clearSuccessMessage();

  if (!result.isValid) {
    if (result.errors.name) {
      showFieldError(nameInput, nameError, result.errors.name);
    }

    if (result.errors.email) {
      showFieldError(emailInput, emailError, result.errors.email);
    }

    return;
  }

  successMessage.textContent = 'Settings saved successfully.';
  form.reset();
  nameInput.focus();
});

nameInput.addEventListener('input', () => handleFieldInput(nameInput, nameError));
emailInput.addEventListener('input', () => handleFieldInput(emailInput, emailError));
