const computeGeometries = function (r, array1, array2, array3) {
  const area1 = calculateAreaOfCircle(r);
  const p1 = calculateCircumference(r);
  const a2 = calculateAreaOfRectangle(array1);
  const p2 = calculatePerimeter(array1);
  const a3 = calculateAreaOfRectangle(array2);
  const p3 = calculatePerimeter(array2);
  const a4 = 0;
  const v4 = calculateVolumeOfCylinder(array3);
  return [
    [area1, p1],
    [a2, p2],
    [a3, p3],
    [a4, v4],
  ];
};
const PI = 22 / 7;
const calculateAreaOfCircle = function (r) {
  const PI = 22 / 7;
  return PI * r * r;
};

function calculateCircumference(r) {
  const d = 2 * r;
  return PI * d;
}

function calculateAreaOfRectangle(arryX) {
  return arryX[0] * arryX[1];
}

function calculatePerimeter(arryY) {
  return 2 * (arryY[0] + arryY[1]);
}

function calculateVolumeOfCylinder(arryZ) {
  const areaOfCircle = calculateAreaOfCircle(arryZ[0]);
  const areaOfRectangle = calculateAreaOfRectangle(arryZ);
  return (volume = areaOfCircle * areaOfRectangle);
}

function display() {
  const areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
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
module.exports = myFunctions;
