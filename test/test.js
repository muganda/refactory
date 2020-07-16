const expect = require('chai').expect
const myFunctions = require('../codelabone')

describe('Calculate Area of circle', function(){
 it('should calculate the area of a circle', function() {
  expect( myFunctions.calculateAreaOfCircle(2)).to.equal(12.571428571428571)
 })
})

describe('Calculate Circumference of circle', function(){
 it('should calculate the circumference of a circle', function() {
  expect( myFunctions.calculateCircumference(2)).to.equal(12.571428571428571)
 })
})

describe('Calculate Area of Rectangle', function(){
 it('should calculate the Area of Rectangle', function() {
  expect( myFunctions.calculateAreaOfRectangle([3,4])).to.equal(12)
 })
})

describe('Calculate Perimeter of Rectangle', function(){
 it('should calculate the Perimeter of Rectangle', function() {
  expect( myFunctions.calculatePerimeter([3,4])).to.equal(14)
 })
})

describe('Calculate Volume of some geometry', function(){
 it('should calculate the Volume of some geometry', function() {
  expect( myFunctions.calculateVolumeOfCylinder([3,7])).to.equal(594)
 })
})