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
        
            if (hours > 1 && minutes > 1){
                    console.log(hours + " hours and " + minutes + " minutes." );
            }

            else if (hours === 1 && minutes === 1){
                    console.log(hours + " hour and " + minutes + " minute.");
            }

            else if (hours > 1 && minutes === 1){
                    console.log(hours + " hours and " + minutes + " minute.");
            }

            else if (hours === 1 && minutes > 1){
                    console.log(hours + " hour and " + minutes + " minutes.")
            }

            else if (hours === 1 && (minutes < 1 || minutes === 0)){
                    console.log(hours + " hour.")
            }

            else if ((hours < 1 || hours === 0) && minutes === 1){
                    console.log(minutes + " minute.")
            }
            else if (hours === 0 && minutes > 1){
                    console.log(minutes + " minutes.");
            }
            else if (hours > 1 && minutes === 0){
                    console.log(hours + " hours.");
            }
    }
}
convertToTime(55);