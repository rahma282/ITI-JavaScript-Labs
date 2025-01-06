//write JavaScript function that accepts a price and discount as numbers and returns the dicounted price
price = parseFloat(prompt('Enter the price: '));
discount = parseFloat(prompt('Enter the Discount: '));  
function calDiscount(price , discount){
     while(isNaN(price) || isNaN(discount)){
        console.error("Must be a valid number");
        price = parseFloat(prompt('Enter the price: '));
        discount = parseFloat(prompt('Enter the discount: '));
    }
    var dicountedPrice= price -(price * (discount/100));
    return dicountedPrice;
}

console.log('discouted Price: ', calDiscount(price, discount)); 

