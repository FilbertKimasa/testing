const reverseString = require('./reverse-string');

describe('reverseString', () => {
  it('should reverse a string', () => {
    const input = 'Hello, World!';
    const expectedOutput = '!dlroW ,olleH';

    const result = reverseString(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty string when given an empty string', () => {
    const input = '';
    const expectedOutput = '';

    const result = reverseString(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should reverse a numeric string', () => {
    const input = '12345';
    const expectedOutput = '54321';

    const result = reverseString(input);

    expect(result).toEqual(expectedOutput);
  });
});
