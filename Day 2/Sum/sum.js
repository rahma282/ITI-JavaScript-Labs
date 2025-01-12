//[1] Write a function to calculate the sum digits in a number
function calDigits(num){
   //get last digit the add it to sum then remove it 
    var sum = 0;
    while (num != 0){
        var lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10); //ensure the result is an integer.
    }
    return sum;
}
var num = parseInt(prompt('Enter number you want to sum its digits: '));
while (isNaN(num)){
        console.error("must be a number.. enter it again")
        var num = parseInt(prompt('Enter number you want to sum its digits: '));
}

console.log("number is: " + num + " the sum of its digits is: " + calDigits(num));


