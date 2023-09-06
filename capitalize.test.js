// Import the capitalize function
const capitalize = require('./capitalize');

// Describe block for the capitalize function
describe('capitalize', () => {
  // Test 1: Capitalize the first letter of a lowercase string
  it('should capitalize the first letter of a lowercase string', () => {
    const inputString = 'hello world';
    const result = capitalize(inputString);
    expect(result).toBe('Hello world');
  });

  // Test 2: Capitalize the first letter of an uppercase string
  it('should capitalize the first letter of an uppercase string', () => {
    const inputString = 'HELLO WORLD';
    const result = capitalize(inputString);
    expect(result).toBe('HELLO WORLD'); // Capitalization should not change uppercase letters
  });

  // Test 3: Capitalize the first letter of a mixed-case string
  it('should capitalize the first letter of a mixed-case string', () => {
    const inputString = 'tHIs iS a MiXeD-cAsE StRiNg';
    const result = capitalize(inputString);
    expect(result).toBe('THIs iS a MiXeD-cAsE StRiNg'); // Only the first letter should be capitalized
  });

  // Test 4: Capitalize the first letter of an empty string
  it('should return an empty string for an empty input', () => {
    const inputString = '';
    const result = capitalize(inputString);
    expect(result).toBe(''); // The result should also be an empty string
  });
  it('Input must be astring', () => {
    const input = 45454;
    expect(() => capitalize(input)).toThrow('Input must be a string');
  });
});
