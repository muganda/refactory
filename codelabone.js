// function computeGeometries(r, array1, array2, array3) {
//   let area1 = (22 / 7) * r * r;
//   let d = 2 * r;
// let p1 = 2 * (22 / 7) * r;
// let a2 = array1[0] * array1[1];
// let p2 = 2 * array1[0] + 2 * array1[1];
// let a3 = array2[0] * array2[1];
// let p3 = 2 * array2[0] + 2 * array2[1];
// var a4 = 0;
// var v4 = (22 / 7) * array3[0] * array3[0] * array3[0] * array3[1];
//         return [[area1, p1], [a2, p2], [a3, p3], [a4, v4]];
// }

const computeGeometries = function (r, array1,array2,array3) {
  let area1 = calculateAreaOfCircle(r);
  let p1 = calculateCircumference(r);
  let a2 = calculateAreaOfRectangle(array1);
  let p2 = calculatePerimeter(array1);
  let a3 = calculateAreaOfRectangle(array2);
  let p3 = calculatePerimeter(array2);
  let a4 = 0;
  let v4 = calculateVolumeOfCylinder(array3);
  return [[area1, p1], [a2, p2], [a3, p3], [a4, v4]];
}

var PI = (22/7);

const calculateAreaOfCircle =  function(r) {
  return ((PI)*r*r)
}

function calculateCircumference (r) {
  let d = (2*r);
  return ((PI)*d)
}

function calculateAreaOfRectangle (arryX) {
  return (arryX[0] * arryX[1])
}

function calculatePerimeter (arryY) {
  return (2*(arryY[0] + (arryY[1])))
}

function calculateVolumeOfCylinder (arryZ) {
 let areaOfCircle = calculateAreaOfCircle(arryZ[0]);
 let areaOfRectangle = calculateAreaOfRectangle(arryZ);
 return volume = (areaOfCircle * areaOfRectangle);
}



function display () {
  let areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
  console.log(areas);
}

display();

const myFunctions = {
  calculateAreaOfCircle,
  calculateCircumference,
  calculateAreaOfRectangle,
  calculatePerimeter,
  calculateVolumeOfCylinder
}

module.exports = myFunctions;

