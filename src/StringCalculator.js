var split = function(numbers){
     var seperateOn = [",", "\n"];                                          //put chosen delimiters into the variable seperateOn
     var tmparr = numbers.split(new RegExp(seperateOn.join('|'), 'g'));     //Split on those delimiters using regular expression
     return tmparr;
}
var sumofArr = function(sumNumbers, sum){
    var neg = "Negatives not allowed: ";                                    //String of length 23
    for(i = 0; i<sumNumbers.length; i++){
        if(parseInt(sumNumbers[i]) < 0){                                    // if a number is less than 0
            neg += sumNumbers[i] + ",";                                     // we add the number to the string that keeps tracks of negatives negative numbers
            continue;
        }
        else if(parseInt(sumNumbers[i]) < 1000){
            sum += parseInt(sumNumbers[i]);
        }
    }
    if(neg.length > 23){                                                    // if a negative number was added to the string, we enter here
        throw neg.substring(0, neg.length - 1);                             // Throw the string( disclude the last ',' )
    }
    return sum;
}
function Add(numbers){
    if(numbers == ""){                                                      // if the string is empty return 0
        return 0;
    }
    var sum = 0;
    if(numbers.includes(",") || numbers.includes("\n"))                     // if there is a delimiter inside the string we go into this ifstatement
    {
        numbers = split(numbers);                                           // seperate on the delimiters , and \n
        return sumofArr(numbers,sum);                                       // return the sum of the inserted numbers
    }
    else{
        return sumofArr(new Array(numbers), sum);                           // send in an array of size 1 and return that number if it isn't negative
    }
}
 module.exports = Add;
