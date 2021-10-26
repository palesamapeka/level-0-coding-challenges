function convertToTime(inputNumber)
{
    if(parseInt(inputNumber) <= 0)
      {
        console.log("Unable to calculate time")
      }
    else 
    {
        const hours = Math.floor((parseInt(inputNumber) / 60));
        const minutes = Math.round((parseInt(inputNumber) % 60));
        let hoursStr = "hour"; 
        let minuteStr = "minute";

        if(hours == 0 || hours > 1)
        {
            hoursStr += "s";
        }
        if(minutes == 0 || minutes > 1)
        { 
            minuteStr += "s";
        }
        console.log(hours, hoursStr + ",", minutes, minuteStr);
    }
}

convertToTime(45);