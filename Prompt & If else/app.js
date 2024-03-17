


// Q1

// var firstName  = prompt('Enter your first name')
// console.log(firstName)

// var lastName = prompt('Enter your last name')
// console.log(lastName)


// var tableNumber = prompt('just me a number of table')

// document.write(`<h1> ${tableNumber} ka table </h1>`)
// document.write(`<li> ${tableNumber} * 1 = ${tableNumber * 1}</li>`)
// document.write(`<li> ${tableNumber} * 2 = ${tableNumber * 2}</li>`)
// document.write(`<li> ${tableNumber} * 3 = ${tableNumber * 3}</li>`)
// document.write(`<li> ${tableNumber} * 4 = ${tableNumber * 4} </li>`)
// document.write(`<li> ${tableNumber} * 5 = ${tableNumber * 5} </li>`)
// document.write(`<li> ${tableNumber} * 6 = ${tableNumber * 6} </li>`)
// document.write(`<li> ${tableNumber} * 7 = ${tableNumber * 7} </li>`)
// document.write(`<li> ${tableNumber} * 8 = ${tableNumber * 8} </li>`)
// document.write(`<li> ${tableNumber} * 9 = ${tableNumber * 9} </li>`)
// document.write(`<li> ${tableNumber} * 10 = ${tableNumber * 10} </li>`)


// if(10==="10"){
//     console.log('condition true')
// }
// else{
//     console.log('condition false')
// }






// Q2

// var num = prompt('enter a number')

// if( num > 0){
//     document.write(`<h1> ${num} is positive </h1>`)
// }
// else if (num < 0){
//     document.write(`<h1> ${num} is negative </h1>`)
// }
// else{
//     document.write(`<h1> ${num} is zero  </h1>`)
// }






// Q3

// var num1 = prompt('enter first number')
// var num2 = prompt(`enter second number`)

// if(num1 > num2){
//     document.write(`<h1>${num1} is greater than ${num2}`)
// }
// else if(num1 < num2){
//     document.write(`<h1>${num1} is less than ${num2}`)
// }
// else{
//     document.write(`<h1>${num1} is equal than ${num2}`)
// }






// Q4

// var num1 = prompt("Enter the first number:")
// var num2 = prompt("Enter the second number:")

// // Use Math.max for a concise and efficient approach
// var largerNumber = Math.max(num1, num2);

// document.write(`<h1>The larger number is:  ${largerNumber}</h1>`)






// Q5

// var num1 = prompt("enter first number:")
// var num2 = prompt("enter second number:")
// var num3 = prompt("enter third number:")

// var samllestNumber = Math.min(num1, num2, num3)

// document.write(`<h1> The samllest number is ${samllestNumber}</h1>`)

// var num = prompt ('Give number and check if is even and odd')

// if (num % 2 == 0 ){
//     document.write(`<h1> ${num} is even </h1>`);
// }
// else if (num % 3 == 0) {
//     document.write(`<h1> ${num} is odd </h1>`);
// }






// Q6

// var num = +prompt()

// if (num %  2 == 0){
//     document.write(`<h1> ${num}  is even</h1>`)
// }
// else if (num != 0){
//     document.write(`<h1>${num} is odd </h1>`)
// }





// Q7
 
// var usernum = +prompt();

// if (usernum % 2 == 0){
//     document.write(`<h1> ${usernum} is even </h1>`);
// }
// else if (usernum != 0){
//     document.write(`<h1> ${usernum} is  odd </h1>`);
// }





// Q8

// var age = prompt("Enter your age")
// var username = prompt("enter your username")

// if (age > 12 && age < 18 && username){
//     document.write(`<h1>boy</h1>`)
// }
// else {
//     document.write(`<h1>invalid</h1>`)
// }





// Q9

// var username = prompt ("Enter your name")
// var password = prompt ("Enter your password")
// var email = prompt ("Enter your email")

// if (username && password && email ){
//     document.write(`<h1>correct</h1>`);
// }
// else if (username || password || email){
//     document.write(`<h1>non correct</h1>`);
// }
//  else {
//     document.write(`<h1>invalid</h1>`)
//  } 





// Q10

// var age = prompt("Enter your age")
// var username = prompt("Enter your name")

// if ((age > 18 || username === "zain")){
//     document.write(`<h1>young</h1>`)
// }
// else {
//     document.write(`<h1>young</h1>`)
// }





// Q11

// var num1 = +prompt()
// var num2 = +prompt()

// if (num1 > num2){
//     document.write(`<h1>${num1} is greater than ${num2}</h1>`)
// }
// else{
//     document.write(`<h1>${num1} is less then ${num2}</h1>`)
// }




// Q12

// var side1 = prompt ("Enter side1")
// var side2 = prompt("Enter side2")
// var side3 = prompt("Enter side3")

// if (side1 === side2 &&  side2 === side3){
//     document.write(`<h1>only traigle</h1>`)
// }
// else if(side1 === side2 || side2 === side3 || side3 === side1){
//     document.write(`<h1>isoceles triangle</h1>`)
// }





// Q13

// var num1 = prompt("Enter any number")

// if(num1 % 2 !== 0 || num1 > 20){
//     document.write(`<h1>${num1} is even</h1>`)
// }
// else{
//     document.write(`<h1>invalid condition</h1>`)
// }




// Q14

// var password = prompt("Enter a password")
// var confrimPassword = prompt("reenter a password")

// if (password === confrimPassword){
//     document.write(`<h1>password</h1>`)
// }
// else{
//     document.write(`<h1>invalid</h1>`)
// }





// Q15

// var usernum = +prompt()

// if (usernum > 0 && usernum % 2 == 0 && usernum <= 10){
//     document.write(`<h1>Number is even</h1>`)
// }
// else{
//     document.write(`<h1>invalid</h1>`)
// }





// Q16

// var username = prompt("type  a username")
// var code = +prompt("Enter a code")

// if ((username === "arqum" || username === "zain") && (code === 786)){
//     document.write(`<h1>${username}</h1>`)
//     document.write(`<h1>${code}</h1>`)
// }
// else{
//     document.write(`<h1>invalid</h1>`)
// }





// Q17

// var mark1 = +prompt("Enter marks for subject 1:")
// var mark2 = +prompt("Enter mark for subject 2:")
// var mark3 = +prompt("Enter mark for subject 3:")

// const average = (mark1 + mark2 + mark3) / 3;

// if (average >= 90){
//     grade = `A`;
// }
// else if(average >= 80){
//     grade = `B`;
// }
// else if(average >= 70){
//     grade = `C`;
// }
// else if(average >= 60){
//     grade = `E`;
// }
// else {
//     grade = `F`;
// }

// alert(`Your average is: ${average}`);
// alert(`Your grade is: ${grade}`);




// Q18

// var celsius = +prompt("Enter a temperature in Celsius: ");

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// var fahrenheit = celsiusToFahrenheit(celsius);

// alert(`${celsius}°C is equal to ${fahrenheit}°F`);




// Q19

// var character = prompt("Enter a character:");

// const vowels = ['a', 'e', 'i', 'o', 'u'];

// if (vowels.includes(character)){
//     console.log("Vowel");
// }
// else if ("[a-zA-Z]"){
//     console.log("Consonant");
// }
// else {
//     consolr.log("Not a letter");
// }



// Q20

var num1 = +prompt("Add a number");
var num = +prompt("Add table Number");

var remainder = num1 % num;
if (remainder == 0){
    document.write(num1 + "is divide by " + num);
}
else{
    document.write(`${num1} is not divide by ${num}`)
}