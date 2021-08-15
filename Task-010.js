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
    console.log("Common Letters: " + Array.from(charCount).join(", "));
}
getCommonChar("HOuse", "Mouse");