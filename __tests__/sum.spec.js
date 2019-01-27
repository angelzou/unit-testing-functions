const sum = require('../src/sum.js');
describe('sum suite', function () {
  test('should add 2 positive numbers together and return the result', function () {
    expect(sum(1, 2)).toBe(3);
  });

  test('Should add 2 negative numbers together and return the result', function() {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('Should add 1 positive and 1 negative numbers together and return the result', function() {
    expect(sum(-1, 2)).toBe(1);
  });

  test('Should add 1 positive and 0 together and return the result', function() {
    expect(sum(0, 2)).toBe(2);
  });

  test('Should add 1 negative and 0 together and return the result', function() {
    expect(sum(0, -2)).toBe(-2);
  });

  test('Should raise an error if one of the inputs is not a number', function() {
    expect(() => sum("0", -2)).toThrowError('Both arguments must be numbers');
  });
});