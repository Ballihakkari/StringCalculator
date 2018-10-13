var split = function(numbers){
     var seperateOn = [",", "\n"];                                          //put chosen delimiters into the variable seperateOn
     var tmparr = numbers.split(new RegExp(seperateOn.join('|'), 'g'));     //Split on those delimiters
     return tmparr;
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
    if(numbers.includes(",") || numbers.includes("\n"))
    {
        var sum = 0;
        numbers = split(numbers);
        return sumofArr(numbers,sum);
    }
    return parseInt(numbers);
}
 module.exports = Add;
