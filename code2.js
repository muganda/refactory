const computeGeometries = function (r, array1, array2, array3) {
  let area1 = calculateAreaOfCircle(r);
  let p1 = calculateCircumference(r);
  let a2 = calculateAreaOfRectangle(array1);
  let p2 = calculatePerimeter(array1);
  let a3 = calculateAreaOfRectangle(array2);
  let p3 = calculatePerimeter(array2);
  let a4 = 0;
  let v4 = calculateVolumeOfCylinder(array3);
  return [
    [area1, p1],
    [a2, p2],
    [a3, p3],
    [a4, v4],
  ];
};
var PI = 22 / 7;
const calculateAreaOfCircle = function (r) {
  var PI = 22 / 7;
  return PI * r * r;
};
function calculateCircumference(r) {
  let d = 2 * r;
  return PI * d;
}
function calculateAreaOfRectangle(arryX) {
  return arryX[0] * arryX[1];
}
function calculatePerimeter(arryY) {
  return 2 * (arryY[0] + arryY[1]);
}
function calculateVolumeOfCylinder(arryZ) {
  let areaOfCircle = calculateAreaOfCircle(arryZ[0]);
  let areaOfRectangle = calculateAreaOfRectangle(arryZ);
  return (volume = areaOfCircle * areaOfRectangle);
}
function display() {
  let areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
  console.log(areas);
}
display();
const myFunctions = {
  calculateAreaOfCircle,
  calculateCircumference,
  calculateAreaOfRectangle,
  calculatePerimeter,
  calculateVolumeOfCylinder,
};
module.exports = mangoes;

const expect = require("chai").expect;
const myFunctions = require("../codelabone");
describe("Calculate Area of circle", function () {
  it("should calculate the area of a circle", function () {
    expect(myFunctions.calculateAreaOfCircle(2)).to.equal(12.571428571428571);
  });
});
describe("Calculate Circumference of circle", function () {
  it("should calculate the circumference of a circle", function () {
    expect(myFunctions.calculateCircumference(2)).to.equal(12.571428571428571);
  });
});
describe("Calculate Area of Rectangle", function () {
  it("should calculate the Area of Rectangle", function () {
    expect(myFunctions.calculateAreaOfRectangle([3, 4])).to.equal(12);
  });
});
describe("Calculate Perimeter of Rectangle", function () {
  it("should calculate the Perimeter of Rectangle", function () {
    expect(myFunctions.calculatePerimeter([3, 4])).to.equal(14);
  });
});
describe("Calculate Volume of some geometry", function () {
  it("should calculate the Volume of some geometry", function () {
    expect(myFunctions.calculateVolumeOfCylinder([3, 7])).to.equal(594);
  });
});
