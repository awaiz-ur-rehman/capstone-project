const form = document.getElementById('settingsForm');
const messageBox = document.getElementById('formMessage');

const fields = [
  {
    key: 'displayName',
    input: document.getElementById('displayName'),
    error: document.getElementById('displayNameError'),
    validate: (value) => value.trim().length >= 2 ? '' : 'Display name must be at least 2 characters.'
  },
  {
    key: 'email',
    input: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: (value) => /\S+@\S+\.\S+/.test(value.trim()) ? '' : 'Please enter a valid email address.'
  },
  {
    key: 'password',
    input: document.getElementById('password'),
    error: document.getElementById('passwordError'),
    validate: (value) => value.length >= 8 ? '' : 'Password must be at least 8 characters.'
  },
  {
    key: 'confirmPassword',
    input: document.getElementById('confirmPassword'),
    error: document.getElementById('confirmPasswordError'),
    validate: (value) => value === document.getElementById('password').value ? '' : 'Passwords do not match.'
  },
  {
    key: 'theme',
    input: document.getElementById('theme'),
    error: document.getElementById('themeError'),
    validate: (value) => value ? '' : 'Please choose a theme.'
  },
  {
    key: 'timezone',
    input: document.getElementById('timezone'),
    error: document.getElementById('timezoneError'),
    validate: (value) => value ? '' : 'Please choose a timezone.'
  },
  {
    key: 'bio',
    input: document.getElementById('bio'),
    error: null,
    validate: (value) => value.length <= 160 ? '' : 'Bio cannot exceed 160 characters.'
  }
];

function setFieldError(field, message) {
  if (field.error) {
    field.error.textContent = message;
  }
  field.input.classList.toggle('invalid', Boolean(message));
  field.input.setAttribute('aria-invalid', Boolean(message) ? 'true' : 'false');
}

function validateField(field) {
  const value = field.input.value;
  const message = field.validate(value);
  setFieldError(field, message);
  return message === '';
}

function validateForm() {
  let isValid = true;
  fields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  return isValid;
}

fields.forEach((field) => {
  field.input.addEventListener('input', () => {
    validateField(field);
  });

  field.input.addEventListener('blur', () => {
    validateField(field);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  messageBox.textContent = '';
  messageBox.className = 'form-message';

  const isValid = validateForm();

  if (!isValid) {
    messageBox.textContent = 'Please correct the highlighted fields before saving.';
    messageBox.classList.add('error');
    return;
  }

  const data = {
    displayName: document.getElementById('displayName').value.trim(),
    email: document.getElementById('email').value.trim(),
    theme: document.getElementById('theme').value,
    timezone: document.getElementById('timezone').value,
    notifications: {
      emailUpdates: document.querySelector('input[name="emailUpdates"]').checked,
      productTips: document.querySelector('input[name="productTips"]').checked
    }
  };

  messageBox.textContent = `Settings saved for ${data.displayName}.`;
  messageBox.classList.add('success');
});
