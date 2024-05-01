//Q1

// var username = "Arqum";

// console.log(username.length);

//Q2

// var username = "arqum";
// result = username.toUpperCase();
// console.log(result);

//Q3

// var username = "ARQUM";
// result = username.toLowerCase();
// console.log(result);

//Q4

// var a = "hello my name is Arqum"; 
//     console.log(a.charAt(6));


//Q5

// var username = prompt ("Enter a number")

// result = username.substring(0,4);

// console.log(result);


//Q6

// var text = "arqum"
// result = text[0].toUpperCase();
// console.log(result);

//Q7


// var email = "  marqum029@gmail.com  ";
// console.log(email+ "---> " + email.length);
// console.log("trim--> "+ email + "---> " + email.trim().length);


//Q8

// var username = "arqum"

// result = username.substring(0,4);

// console.log(result);

//Q9

// var a ="arqum";

// result = a.length;

// console.log(result);

//Q10

// var text = "Arqum got first position in class.";
//  text = text.replace('Arqum got first position in class.' , 'sentence is removed');
//  console.log(text);


//Q11

// var sentence = "javascript is wonderful programming languuage";

// var vowelcount = 0;
// var constcount = 0;

// for(var i = 0; i < sentence.length; i++ ){
//     if(sentence[i].toLowerCase() === "a" || sentence[i].toLowerCase === "e" || sentence.toLowerCase === "i" || sentence.toLowerCase === "o" || sentence.toLowerCase === "u"){
//     vowelcount ++;
// }
// else if (sentence[i] !== " "){
//     constcount ++;

// }
// }

// var vowels = ["a","e", "i", "o", "u"];

// for (let i = 0 ; i < sentence.length ; i++){
//     var vowelfound = false;

// for (let j = 0; j < sentence.length; j++){
//     if (sentence[i].toLowerCase() === vowels[j]){
//     vowelfound = true;

//     break;
// }    
// }

// if (vowelfound) vowelcount ++ ;
// if (!vowelfound && sentence[i] !== " " ) constcount++;
// }

// console.log ("vowelscount->", vowelcount);
// console.log ("constcont->", constcount);



//Q12 Count the number of letter a used in sentence.

// var sentence = "javascript is wonderful programming languuage";
// var count  = 0

// for (var i = 0 ; i < sentence.length ; i++){
//     if (sentence.charAt(i).toLowerCase() === "A") count++;
// }

// console.log("Number A in this sentence are", count);


//Q13 Capitilize first letter of each word.

// var userName = "Muhammad Arqum Tariq"
// var arr = userName.split("");
// console.log(userName);
// console.log(arr);

// for (var i = 0; i < arr.length ; i++){
//     var word = arr[i];
//     arr[i] = word[0].toUpperCase() + word.slice(1);
// }

// console.log(arr);
// var updated = arr.join(" ");
// console.log(updated);

//Q14 Password must include 1 capital letter , 1 number , min length should be 8.

// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var special = "!_@$%";

// var password = prompt ("Enter password min length 8, 1 uppper case, 1 Number ");

// console.log(password);




var box = document.getElementById("box");
console.log(box.style);

function changered(){
    box.style.background = "red";
}

function changeorange(){
    box.style.background = "orange";
}

function changeblue(){
    box.style.background = "blue";
}

function changeblack(){
    box.style.background = "black";
}

function changeyellow(){
    box.style.background = "yellow";
}