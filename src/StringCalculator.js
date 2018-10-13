function Add(numbers){
    if(numbers == ""){
        return 0;
    }
    if(numbers.includes(","))
    {
        var sum = 0;
        numbers = numbers.split(",");
        for(i = 0; i<numbers.length; i++)
        {
            sum += parseInt(numbers[i]);
        }
        return sum;
    }
    return parseInt(numbers);
}

 module.exports = Add;
