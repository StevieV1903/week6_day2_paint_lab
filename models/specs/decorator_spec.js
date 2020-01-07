const assert = require('assert');
const Decorator = require('../decorator.js')

describe('Decorator', function() {

let decorator;

  beforeEach( function() {
    decorator = new Decorator()
  });
  it('should start with an empty paint stock', function () {
    const actual = decorator.paintStock;
    assert.deepStrictEqual( actual, [] );
  });
  it('should add paint can to stock', function () {
    decorator.addPaintCanToStock( 10 );
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, [10]);
  });
});
