//write JavaScript function that accepts a price and discount as numbers and returns the dicounted price
function calDiscount(price , discount){
    if (!isNum(price) || !isNum(discount)){
        throw new Error("Must be a number");
    }

    var dicountedPrice= price -(price * (discount/100));
    return dicountedPrice;
}
function isNum(num){
    if (typeof num !== 'number' ||isNaN(num)){
        throw new Error("Must be a vaild number");
    }
    return true;
}
var price = parseFloat(prompt('Enter the price: '));   //parseFloat() is used to convert the input string into a number.
var discount = parseFloat(prompt('Enter the Discount: '));  
try {
    if (price === null || discount === null || isNaN(price) || isNaN(discount)) { 
        console.log(`discouted Price: `, calDiscount(price, discount)); 
    }
} catch (error) {
    console.error(error.message);
}