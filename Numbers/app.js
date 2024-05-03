//*Round*//

// var number = 5.0
// console.log(Math.round(number));

//*floor*//

// var number = 2.8
// console.log(Math.floor(number));

//*ceil*//

// var number = 4.4
// console.log(Math.ceil(number));


//string ko number me convert krna
//1. +lagdo phele
//2. Number () ke function me de do
//3. parseInt () ye decimal ko convert ni krta 
//4. parseFloat () ye decimal ko bi covert krta hn

// console.log(typeof number);
// console.log(typeof number.toString());

// var price = "340245.4";
// console.log("parseInt", parseInt(price));

//decimal ki length ko control krne ke liye
// var divide = 10 / 3;
// console.log(Math.round(divide));



var heading = document.getElementById("random");
function generateOTPNumber() {
    
    var random = Math.round(Math.random() * 10000);
    heading.innerText = random;
}