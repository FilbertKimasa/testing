const stringLength = require('./string');
test('Return the number of characters in a string', () => {
  expect(stringLength('fruits')).toBe(6);
  expect(stringLength('12345')).toBe(5);
  expect(stringLength('   ')).toBe(3);
});

test('Throw an error if If input is not a string', () => {
  expect(() => stringLength(66555)).toThrow();
});

test('Throw an error if the string size is not between 1 and 10', () => {
  expect(() => stringLength('')).toThrow(
    'String length must be between 1 and 10 characters'
  );
  expect(() => stringLength('hhhhhhhhhhh')).toThrow(
    'String length must be between 1 and 10 characters'
  );
});
