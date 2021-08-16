function convertToTime(inputNumber)
{
    if(parseInt(inputNumber) <= 0)
    {
        console.log("Unable to calculate time")
    }
    else {
        var hours = Math.floor((parseInt(inputNumber) / 60));
        var minutes = Math.round((parseInt(inputNumber) % 60));

        if(hours === 1 && minutes === 1)
           {
                console.log(hours + " hour and " +  minutes + " minute");
           }
        else if(hours >= 2 && minutes >= 2)
           {
                console.log(hours + " hours and " + minutes + " mniutes");
           }

        else if(hours <= 1 && minutes > 1)
            {
                console.log(hours + " hour and " + minutes + " minutes");
            }

        else if(hours >= 2  && minutes <= 1)
            {
                 console.log(hours + " hours and " + minutes + " minute");
            }
        else if(hours === 0 && minutes > 1)
           {
                 console.log(minutes + " minutes") || console.log(minutes + " minute");
           }
        else if(hours > 1 && minutes === 0)
        {
                 console.log(hours + " hours") || console.log(hours + " hour");
        }
        else if(hours === 1 && minutes === 0)
        {
                 console.log(hours + " hour");
        }
    
        }
    }
convertToTime(55);