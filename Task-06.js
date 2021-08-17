function maximum()
{
    for(var x = 0; x <arguments.length; x++)
    {
        var inputArr = [];
        var maxValue = 0;
                
        for(var x = 0; x < arguments.length; x++)
        {
            inputArr.push(arguments[x]);
            maxValue = inputArr[0];

            for(var i = 0; i < inputArr.length; i++)
            {
                if(inputArr[i] > maxValue)
                {
                maxValue = inputArr[i];
                }
            }
        }
    }
    return maxValue;
}
console.log(maximum(-10, -5, -9, -11, -56, 2222, -63, 87, 556, 2000, -59, 68));