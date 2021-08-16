function areaOfTriangle(side1, side2, side3)
{
        //Using the semiperimeter method
        var semiperimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3))/2;
        var area = Math.sqrt(semiperimeter*(semiperimeter - side1) * (semiperimeter - side2)* (semiperimeter - side3));
         return area.toFixed(2);   
}
console.log(areaOfTriangle(4, 5, 6));