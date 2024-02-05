const { multiply } = require('./math');

test('multiplies 1 * 2 to equal 3 FAIL', () => {
  expect(multiply(1, 2)).toBe(3);
});

test('multiplies 1 * 2 to equal 2 PASS', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiplies 1 * 2 to equal 4 FAIL', () => {
  expect(multiply(1, 2)).toBe(4);
});