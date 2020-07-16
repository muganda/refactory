function computeGeometries(radius, array1, array2, array3) {
  let pi = 22 / 7;
  let area1 = pi * radius * radius;
  //let d = 2 * r;
  let p1 = 2 * pi * radius;
  let a2 = array1[0] * array1[1];
  let p2 = 2 * array1[0] + 2 * array1[1];
  let a3 = array2[0] * array2[1];
  let p3 = 2 * array2[0] + 2 * array2[1];
  var a4 = 0;
  var v4 = pi * array3[0] * array3[0] * array3[0] * array3[1];
  return [
    [area1, p1],
    [a2, p2],
    [a3, p3],
    [a4, v4],
  ];
}

let areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
console.log(areas);

module.exports = computeGeometries;