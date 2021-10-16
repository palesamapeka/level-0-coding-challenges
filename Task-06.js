function maximum()
{
    let maxValue = arguments[0];
    for(let x = 0; x <arguments.length; x++)
    {
        if(maxValue < arguments[x])
        {
            maxValue = arguments[x];
        }
    }
    return maxValue;
}
console.log(maximum(-10, -5, -9, -11, -56, -2222, -63, -87, -556, -2000, -59, -68, 0));