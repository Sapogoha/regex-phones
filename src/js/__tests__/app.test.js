import validatePhoneNumber from '../app';

test('russian number starting with 8', () => {
  const phoneNumber = validatePhoneNumber('8 (927) 000-00-00');

  expect(phoneNumber).toBe('+79270000000');
});

test('russian number starting with +7', () => {
  const phoneNumber = validatePhoneNumber('+7 960 000 00 00');

  expect(phoneNumber).toBe('+79600000000');
});

test('chineese number statring with +86', () => {
  const phoneNumber = validatePhoneNumber('+86 000 000 0000');

  expect(phoneNumber).toBe('+860000000000');
});

test('chineese number statring with 86', () => {
  const phoneNumber = validatePhoneNumber('86 000 000 0000');

  expect(phoneNumber).toBe('+860000000000');
});

test('turkish number', () => {
  const phoneNumber = validatePhoneNumber('+90(000)-000-00-00');

  expect(phoneNumber).toBe('+900000000000');
});

test('ukranian number', () => {
  const phoneNumber = validatePhoneNumber('+380 00 0000000');

  expect(phoneNumber).toBe('+380000000000');
});
