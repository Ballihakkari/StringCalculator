var split = function(numbers)
{
    numbers = numbers.split(",");
    return numbers;
}
var sumofArr = function(splitNumbers, sum)
{
    for(i = 0; i<splitNumbers.length; i++)
    {
        sum += parseInt(splitNumbers[i]);
    }
    return sum;
}
function Add(numbers){
    if(numbers == ""){
        return 0;
    }
    if(numbers.includes(","))
    {
        var sum = 0;
        numbers = split(numbers);
        return sumofArr(numbers,sum);
    }
    return parseInt(numbers);
}
 module.exports = Add;
