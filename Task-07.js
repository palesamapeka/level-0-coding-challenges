function toFahrenheit(celsiusTemp)
{
    const fahrenheitTemp = (parseInt(celsiusTemp) * (9/5)) + 32;
    return fahrenheitTemp;
}
console.log(toFahrenheit(0));

function toCelsius(fahrenheitTemp)
{
    const celsius = (parseInt(fahrenheitTemp) - 32) * (5/9);
        return celsius;
}
console.log(toCelsius(32));