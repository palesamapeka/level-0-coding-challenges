function maximum()
{
    for(var x = 0; x <arguments.length; x++)
    {
        var valuesArgs = Array.prototype.slice.call(arguments);
        var max = valuesArgs[0];
        if(arguments[x] >= max)
        {
            max = arguments[x];
        }
    }
    return max;
}

console.log(maximum(-1, -2, 0));