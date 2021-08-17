var charCount = "";

function getCommonChar(word1, word2)
{
    var str1, str2;
    str1 = (word1.toLowerCase());
    str2 = (word2.toLowerCase());

    for(var x = 0; x < str1.length; x++)
    {
        for(var i = 0; i <str2.length; i++)
        {
            if((str1.charAt([x])) === (str2.charAt([i])))
            {
                charCount += str1.charAt([x]);
            }
        }
    }
    var setOfCommon = new Set();
    var uniqueLetters = charCount.split(", ").toString();
    for(var q = 0; q < uniqueLetters.length; q++)
    {
        setOfCommon.add(uniqueLetters[q]);
    }
    console.log("Common Letters: " + Array.from(setOfCommon).join(", "));
}
getCommonChar("ssoUr", "ssOuR");