//* Changing Case *//


//Q1

// var username = "arqum";

// result = username.toUpperCase();

// console.log(result);


//Q2

// var username = "ARQUM";

// result = username.toLowerCase();

// console.log(result);


//Q3

// var a = "a";
// var A = "A";

// console.log(a.toLowerCase() == A.toLowerCase());


//Q4

// var cities = ['karachi', 'lahore', 'sukkar'];
// var usercity = prompt ("Enter your city");

// for  (var i = 0 ; i < cities.length; i++){
//    console.log(cities[i]);
//    if (cities[i] == usercity.toLowerCase()){
//    console.log("city match");
   
// }
// else{
//     console.log("not match");
// }

// }


//Q5

// var a = "hello my name is Arqum";

// console.log(a[2]);
// console.log(a.slice(0,5));


//Q6

// var username = "Arqum";
// var sentence = "Send document on my email marqum029@gmail.com. After going through document I will be sending queries.";

// console.log(username[0].toUpperCase() + username.slice(1));

// console.log(sentence.indexOf("document"));

// console.log(sentence.lastIndexOf("document"));


//charAt

// var username = "Arqum";
// var sentence = "Send document on my email marqum029@gmail.com. After going through document I will be sending queries!.";


// for (var i = 0; i < sentence.length; i++){
//     if (sentence.charAt(i) == "!"){
//         console.log(i);
//   console.log("Exclamation point found!");
//   break;
//     }
// }


//replace

// var text = "Arqum got first position in class.";
// text = text.replace('first' , '1st');
// console.log(text);


//trim

var email = "  marqum029@gmail.com  ";
console.log(email+ "---> " + email.length);
console.log("trim--> "+ email + "---> " + email.trim().length);
