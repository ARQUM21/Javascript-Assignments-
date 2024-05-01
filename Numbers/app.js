//*Round*//

var number = 5.0
console.log(Math.round(number));

//*floor*//

var number = 2.3
console.log(Math.floor(number));

//*ceil*//

var number = 4.6
console.log(Math.ceil(number));


//string ko number me convert krna
//1. +lagdo phele
//2. Number () ke function me de do
//3. parseInt () ye decimal ko convert ni krta 
//4. parseFloat () ye decimal ko bi covert krta hn

// console.log(typeof number);
// console.log(typeof number.toString());

var price = "340a45.4";
console.log("parseInt", parseFloat(price));

//decimal ki length ko control krne ke liye
var divide = 10 / 3;
console.log(divide.toFixed(2));