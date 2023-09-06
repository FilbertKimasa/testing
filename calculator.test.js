const Calculator = require('./calculator');
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should correctly add two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      expect(calculator.add(-5, -2)).toBe(-7);
    });

    it('should add a positive and a negative number correctly', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    it('should subtract negative numbers correctly', () => {
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });

    it('should subtract a positive and a negative number correctly', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });
  });

  describe('divide', () => {
    it('should correctly divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow(
        'Division by zero is not allowed'
      );
    });

    it('should divide negative numbers correctly', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should correctly multiply two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('should multiply by zero correctly', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it('should multiply negative numbers correctly', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
