import validatePhoneNumber from '../app';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['86 000 000 0000', '+860000000000'],
  ['+90(000)-000-00-00', '+900000000000'],
  ['+380 00 0000000', '+380000000000'],
])('testing validatePhoneNumber function with param %s', (phone, result) => {
  expect(validatePhoneNumber(phone)).toBe(result);
});
