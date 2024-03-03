

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


// var num = prompt ('Give number and check if is even and odd')

// if (num % 2 == 0 ){
//     document.write(`<h1> ${num} is even </h1>`)
// }
// else{
//     document.write(`<h1> ${num} is odd </h1>`)
//



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

// var num1 = prompt("Enter the first number: ")
// var num2 = prompt("Enter the second number: ")

// // Use Math.max for a concise and efficient approach
// var largerNumber = Math.max(num1, num2);

// document.write(`<h1>The larger number is:   ${largerNumber}</h1>`)


// var num1 = prompt("enter first number:")
// var num2 = prompt("enter second number:")
// var num3 = prompt("enter third number:")

// var samllestNumber = Math.min(num1, num2, num3)

// document.write(`<h1> The samllest number is ${samllestNumber}</h1>`)


// function calculateFactorial(number) {
//     // Handle negative numbers and 0 (optional)
//     if (number < 0) {
//       return "Factorial is not defined for negative numbers.";
//     } else if (number === 0) {
//       return "The factorial of 0 is 1.";
//     }
  
//     // Initialize the factorial
//     let factorial = 1;
  
//     // Calculate factorial using a loop
//     for (let i = 1; i <= number; i++) {
//       factorial *= i;
//     }
  
//     return "The factorial of " + number + " is " + factorial;
//   }
  
//   var userInput = prompt("Enter a number: ")
//   var result = calculateFactorial(userInput)
//   document.write(`<h1> ${result} <h1>`)


  function calculateFactorial(number) {
    if (number < 0){
        document.write(`<h1>Factorial is not defined for negative numbers.</h1>`)

    }
    else if (number === 0){
        document.write(`<h1>The factorial of 0 is 1.</h1>`)
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.write(`<h1> The factorial of ${number} is ${factorial}</h1>`);
  } 

  var userInput = prompt("Enter number")
  var result = calculateFactorial(userInput)
 
  

  
