function maximum()
{
    for(let x = 0; x <arguments.length; x++)
    {
        var inputArr = [];
        var maxValue = 0;
                
        for(let n = 0; n < arguments.length; n++)
        {
            inputArr.push(arguments[n]);
            maxValue = inputArr[0];

            for(let i = 0; i < inputArr.length; i++)
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