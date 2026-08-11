import test from 'node:test';
import assert from 'node:assert/strict';
import { validateForm } from './form-validation.js';

test('returns an error when name is empty', () => {
  const result = validateForm({ name: '', email: 'user@example.com' });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.name, 'Name is required');
});

test('returns an error when email is empty', () => {
  const result = validateForm({ name: 'Ada', email: '' });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'Email is required');
});

test('returns an error when email format is invalid', () => {
  const result = validateForm({ name: 'Ada', email: 'not-an-email' });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'Please enter a valid email');
});

test('returns valid when name and email are provided correctly', () => {
  const result = validateForm({ name: 'Ada', email: 'ada@example.com' });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});
