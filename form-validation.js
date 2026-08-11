const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateForm(values = {}) {
  const name = (values.name ?? '').trim();
  const email = (values.email ?? '').trim();
  const errors = {};

  if (!name) {
    errors.name = 'Name is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
