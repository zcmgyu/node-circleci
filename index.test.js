// (() => {
//   process.argv.forEach(function(val, key, array) {
//     console.log(key + ': ' + val);
//     console.log('DEBUG typeof val', typeof val);
//   });
// })();
const assert = require('assert');

describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
  it('my test', () => {
    // should set the timeout of this test to 1000 ms; instead will fail
    this.timeout(1000);
    console.log('DEBUG hello');
    assert.ok(true);
  })
});
