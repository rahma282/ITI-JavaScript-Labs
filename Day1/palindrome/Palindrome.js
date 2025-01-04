function isPalindeome(str) {
    if (!isString(str)) {
        throw new Error("Input must be a string");
    }
    var first = 0;
    var last = str.length - 1;
    while (first < last) {
        if (str[first] !== str[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
}

function isString(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return true;
}

var input = prompt('Enter a string to check if it is a palindrome: ');

try {
    if (input !== null && isString(input)) { 
        console.log(`Is "${input}" a palindrome? `, isPalindeome(input)); 
    }
} catch (error) {
    console.error(error.message);
}











 /* Check if str === str.split("") --> array of chars ['r', 'o', 'o', 'r']
       .reverse() --> reverse the order of chars
       .join("") --> join the chars into a string 
       
       function ispalindeome(str) {
    if (!isString(str)) {
        throw new Error("Input must be a string");
    }
    var s = str.split("").reverse().join("");
    return str === s;
}
*/