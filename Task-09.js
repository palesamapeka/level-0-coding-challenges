const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
let vowelsFound = "";

function getVowels(str)
{
    let userInput = str.toLowerCase();
    for(let i = 0; i < userInput.length; i++)
    {
        for(let x = 0; x < vowelsArr.length; x++)
        {
            if(userInput.charAt([i]) === vowelsArr[x])
            {
                vowelsFound += userInput.charAt([i]); 
            }
        }
    }
    let setOfVowels = new Set();
    let uniqueVowels = vowelsFound.split(", ").toString();
    for(var q = 0; q < uniqueVowels.length; q++)
    {
        setOfVowels.add(uniqueVowels[q]);
    }
    console.log("Vowels: " + Array.from(setOfVowels).join(", "));
}
getVowels("uMUzI");