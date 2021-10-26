function areaOfTriangle(side1, side2, side3) {
  //Using the semiperimeter method
  const semiPerimeter =
    (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2;
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );
  return area;
}
console.log(areaOfTriangle(4, 5, 6));
