//[3] Write a function to calculate the number of occurances of a character in a string
function calNumOfOccurances(str , ch){
    var count =0;
    for (var i=0; i<str.length; i++){
        if (str.charAt(i) == ch){
            count++;
        }
    }
    return count;
}
str="hi, how are you!";
ch ='h';
console.log("number of occurances of character: " +ch+" --> is: " +calNumOfOccurances(str,ch));