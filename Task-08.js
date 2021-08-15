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
        }
    }
convertToTime(133);