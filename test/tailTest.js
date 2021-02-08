const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns undefined for ['Hello']", () => {
    assert.deepEqual(tail(['Hello'], undefined));
  });

  it("returns undefined for an empty array", () => {
    assert.deepEqual(tail([], undefined));
  });
});

