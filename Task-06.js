var max = 0;

function maximum()
{
    for(var x = 0; x <arguments.length; x++)
    {
        if(arguments[x] >= max)
        {
            max = arguments[x];
        }
    }
    console.log(max);
}

maximum(1,22,3,2);