function areaOfTriangle(side1, side2, side3)
{
        //Using the semiperimeter method
        var area = 0.5 * (parseInt(side1) * parseInt(side2) * parseInt(side3));
        return area;    
}
console.log(areaOfTriangle(15, 5, 6));