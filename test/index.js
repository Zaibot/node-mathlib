const mathlib = require('../src');
const assert = require('assert');

describe('constrain', function() {
  it('should return 5', function() {
    assert.equal(mathlib.constrain(10, 0, 5), 5);
  });
});

describe('map_constrain', function() {
  it('should return 10', function() {
    assert.equal(mathlib.map_constrain(10, 0, 5, 5, 10), 10);
  });
  it('should return 10', function() {
    assert.equal(mathlib.map_constrain(10, 0, 5, 10, 5), 5);
  });
});

describe('map', function() {
  it('should return 10', function() {
    assert.equal(mathlib.map(5, 0, 5, 0, 10), 10);
  });
});

describe('round_dec', function() {
  it('should return 1.2', function() {
    assert.equal(mathlib.round_dec(1.23456, 1), 1.2);
  });
});

