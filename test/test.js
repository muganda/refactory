/* eslint-disable no-undef */
const { expect } = require('chai');
const myFunctions = require('./refactored');

describe('Calculate Area of circle', () => {
  it('should calculate the area of a circle', () => {
    expect(myFunctions.calculateAreaOfCircle(2)).to.equal(12.571428571428571);
  });
});
describe('Calculate Circumference of circle', () => {
  it('should calculate the circumference of a circle', () => {
    expect(myFunctions.calculateCircumference(2)).to.equal(12.571428571428571);
  });
});
describe('Calculate Area of Rectangle', () => {
  it('should calculate the Area of Rectangle', () => {
    expect(myFunctions.calculateAreaOfRectangle([3, 4])).to.equal(12);
  });
});
describe('Calculate Perimeter of Rectangle', () => {
  it('should calculate the Perimeter of Rectangle', () => {
    expect(myFunctions.calculatePerimeter([3, 4])).to.equal(14);
  });
});
describe('Calculate Volume of some geometry', () => {
  it('should calculate the Volume of some geometry', () => {
    expect(myFunctions.calculateVolumeOfCylinder([3, 7])).to.equal(594);
  });
});
