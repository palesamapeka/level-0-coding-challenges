var vowelsArr = ['a', 'e', 'i', 'o', 'u'];
var vowelsFound = "";

function getVowels(str)
{
    var userInput = str.toLowerCase();
    for(var i = 0; i < userInput.length; i++)
    {
        for(var x = 0; x < vowelsArr.length; x++)
        {
            if(userInput.charAt([i]) === vowelsArr[x])
            {
                vowelsFound += userInput.charAt([i]); 
            }
        }
    }
    var setOfVowels = new Set();
    var uniqueVowels = vowelsFound.split(", ").toString();
    for(var q = 0; q < uniqueVowels.length; q++)
    {
        setOfVowels.add(uniqueVowels[q]);
    }
    console.log("Vowels: " + Array.from(setOfVowels).join(", "));
}
getVowels("uMUzI");