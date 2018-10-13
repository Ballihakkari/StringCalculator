//Finds the delimiter if one exists
var findDelim = function(numbers){
    if(numbers.substring(0,2) == "//"){                                             //If the string starts with // we know there is a delimiter
        var split = numbers.split("\n")                                             //Split on \n since that is where the delimiter ends
        var delim = split[0].substring(2, split[0].length);                         //The delimiter equals the value from the two frontslashes to the first \n
        return delim;                                                               //Return that delimiter
    }
    else{
        return null;                                                                //If there is no delimiter return null ( here i take it that null can not be a delimiter )
    }
}

//Splits the numbers into n many string arrays of length 1
var splitWithoutDelim = function(numbers){
     var seperateOn = [",", "\n"];                                                 //Put chosen delimiters into the variable seperateOn
     var tmparr = numbers.split(new RegExp(seperateOn.join('|'), 'g'));            //Split on those delimiters
     return tmparr;                                                                //Return the array of numbers
}

//Splits the numbers into n many string arrays of length 1
var splitWithDelim = function(numbers, delim){
     var seperateOn = [",", "\n", delim];                                           //Put chosen delimiters into the variable seperateOn
     var tmparr = numbers.split(new RegExp(seperateOn.join('|'), 'g'));             //Split on those delimiters
     return tmparr;                                                                 //Return the array of numbers
}

//send in the array and a sum and add the value of the array with the sum, return the sum.
var sumofArr = function(sumNumbers, sum){
    var neg = "Negatives not allowed: ";                                            //Initialize a string of length 23
    for(i = 0; i<sumNumbers.length; i++){                                           //Iterate through the array that was sent in
        if(parseInt(sumNumbers[i]) < 0){                                            //If a number is less than 0
            neg += sumNumbers[i] + ",";                                             //We add the number to the string that keeps tracks of negatives negative numbers
        }
        else if(parseInt(sumNumbers[i]) < 1000){                                    //Ignore the number if it is over 1000
            sum += parseInt(sumNumbers[i]);                                         //Add the number to our sum
        }
    }
    if(neg.length > 23){                                                            //If a negative number was added to the string then the length of the string will be more
        throw neg.substring(0, neg.length - 1);                                     //Than 23 and Throw the string( excluding the last ',' )
    }
    return sum;                                                                     //If we did not throw an error we return the sum
}

//returns the sum of inputed numbers seperated by delimiters
function Add(numbers){
    if(numbers == ""){                                                              //If the string is empty return 0
        return 0;
    }
    var sum = 0;
    delim = findDelim(numbers);                                                     //Find the custom delimitor if one exists
    if(delim != null){                                                              //If one was found we enter here
        splitWithDelim(numbers, delim);
        return sumofArr(numbers,sum);
    }
    else if(numbers.includes(",") || numbers.includes("\n")){                       //Enter here if there are multiple numbers without a custom delimitor
        numbers = splitWithoutDelim(numbers);                                       //Seperate on the delimiters , and \n
        return sumofArr(numbers,sum);                                               //Return the sum of the inserted numbers
    }
    else{                                                                           //If there is no delimiter we have a single number
        return sumofArr(new Array(numbers), sum);                                   //Send that number as an array of size 1 into the sum function return that number if
    }                                                                               //If not negative or over 1000
}

module.exports = Add;
