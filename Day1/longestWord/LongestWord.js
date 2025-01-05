/*
Write a function that accept a sentence and return the longest word
within the input
Example : 'Web Development Tutorial'
Output : 'Development'
*/
function findLongestWord(str){
    var word = str.split(" ");
    var longestWord = "";
    for (var i=0; i<word.length; i++){
        
        if (word[i].length > longestWord.length){
           longestWord = word[i];
        }
    }
    return longestWord;
}
var str = 'Web Development Tutorial';
console.log("Longest word in the sentence: \"" + str + "\" is \"" + findLongestWord(str) + "\"");