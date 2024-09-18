const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('checking if number round', function () {
    const result = calculateNumber(1, 2);
    assert.strictEqual(result, 3);
  });
  it('checking if number round', function () {
    const result = calculateNumber(1.4, 2.2);
    assert.strictEqual(result, 3);
  });
  it('checking if number round', function () {
    const result = calculateNumber(1.6, 2.7);
    assert.strictEqual(result, 5);
  });
  it('checking if number round', function () {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });
  it('checking if number round', function () {
    const result = calculateNumber(-1.6, -1.7);
    assert.strictEqual(result, -4);
  });
  it('checking if number round', function () {
    const result = calculateNumber(-1.4, -1.3);
    assert.strictEqual(result, -2);
  });
});
