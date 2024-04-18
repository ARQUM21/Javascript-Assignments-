//Q1

var username = "Arqum";

console.log(username.length);

//Q2

var username = "arqum";
result = username.toUpperCase();
console.log(result);

//Q3

var username = "ARQUM";
result = username.toLowerCase();
console.log(result);

//Q4

var a = "hello my name is Arqum"; 
    console.log(a.charAt(6));


//Q5

var username = prompt ("Enter a number")

result = username.substring(0,4);

console.log(result);


//Q6

var text = "arqum"
result = text[0].toUpperCase();
console.log(result);

//Q7


var email = "  marqum029@gmail.com  ";
console.log(email+ "---> " + email.length);
console.log("trim--> "+ email + "---> " + email.trim().length);

//Q8

var character = prompt("Enter a character:");

const  vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(character)){
    console.log("Vowel");
}
else if ("[a-zA-Z]"){
    console.log("Consonant");
}


//Q9

var username = "arqum"

result = username.substring(0,4);

console.log(result);

//Q10

var a ="arqum";

result = a.length;

console.log(result);

//Q11

var text = "Arqum got first position in class.";
 text = text.replace('Arqum got first position in class.' , 'sentence is removed');
 console.log(text);