//[2] Write a function to calculate the number of vowels in a string
function calVowels(str){
   var countA =0;
   var countE =0;
   var countI =0;
   var countO =0;
   var countU =0;

   str.toLowerCase(); 
   for (var i=0; i<str.length; i++){
    if (str.charAt(i)== 'a'){
        countA ++;
    }else if (str.charAt(i)== 'u'){
        countU ++;
    }else if (str.charAt(i)== 'e'){
        countE ++;
    }else if (str.charAt(i)== 'i'){
        countI ++;
    }else if (str.charAt(i)== 'o'){
        countO ++;
    }
   }
   console.log("Count of A vowel in " + str + " is: " +countA );
   console.log("Count of E vowel in " + str + " is: " +countE );
   console.log("Count of U vowel in " + str + " is: " +countU );
   console.log("Count of O vowel in " + str + " is: " +countO );
   console.log("Count of I vowel in " + str + " is: " +countI );
}
var str = "hi my friend, how are you!";
calVowels(str);