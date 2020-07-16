const assert = require("chai").assert;
const R = require("../codelabone");

describe("test for the correct area", function () {
  let computeGeometries = R;
  it("test correct result", function () {
    assert.equal(
      computeGeometries(
        12.571428571428571,
        12.571428571428571,
        [12, 14],
        [20, 18],
        [0, 594]
      )
    );
  });
});
