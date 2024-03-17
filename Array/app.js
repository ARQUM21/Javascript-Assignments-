
//Array problems

// Q1

// var city1 ="Karachi";
// var city2 = "lahore";
// var city3 = "Multan";

// var cities = ["karachi", "lahore", "Islamabad"];

// console.log(cities[0]);

// document.write(`${cities[0]} is the city of light<br>`);
// document.write(`${cities[1]} is the capital of punjab<br>`);
// document.write(`${cities[2]} is the capital of pakistan<br>`);




// Arrays methods

//1 push , add 1 or more elements in the last of an array

//2 pop  , remove one element from last of an array 

//3 unshift , add 1 or more elements in the start of an array

//4 shift , remove one element from start of an array

//5 splice , splice original array ko update krta hn
// splice ke 3 method hn
//. index number (jaha se hume add or remove krwana hn)
//. kitne items remove krne hn
//. jo items hume add krne hn

//6 Slice
// array se elements ko copy krne ke liye
// slice original array mein koi change nai krta
// slice copy krke new array return kr deta hn
// slice ke 2 parameters hn
//1. kaha se copy krna start krna hn
//2. jahan thk copy krna hn use se aik number zyada dehta hn

//7 indexoF




// * PUSH * //

// var cities = ["karachi", "lahore", "faisalabad"];

// console.log(cities);

// cities.push("peshawar", "Swat", "Quetta", "Kashmir");

// console.log("cities after push ", cities);

// console.log(cities[6]);



// * POP * //

// var cities = ["Karachi", "lahore" , "faisalabad"];

// console.log(cities);

// cities.pop();

// console.log("after pop" ,cities);



// * UNSHIFT * //

// var cities = ["karachi", "lahore", "Multan"];

// console.log(cities);

// cities.unshift("quetta", "Swat");

// console.log("after unshift",cities);



// * SHIFT * //

// var student = ["Arqum","Zubair", "Asad"];

// console.log(student);

// student.shift();

// console.log("After Shift",student);



// * Splice * //

// var student = ["Arqum", "Zubair", "Asad", "Ezhan", "Ahmed"];

// console.log(student);

// student.splice(0, 2, "Atif");

// console.log("After splice", student);



// * Slice * //

// var qualification = ["matric", "intermediate", "bs", "master", "phd"];

// console.log(qualification);

// qualification.slice(2, 1, " bs");

// console.log("after slice",qualification);



// * INDEXOF * //

// var student = [213,234,345,456,567,678,79,890];
// var usernum = +prompt("enter roll no");

// var userroll = student.indexOf(usernum);
// console.log(userroll);

// if (userroll === -1){

//     alert("not allowed");

// }

// else{

//     alert("allowed");

// }


var fruits = ["Orange", "kiwi", "watermelon", "banana"];

var choice = prompt("Add a fruit name");

var  confrim = fruits.indexOf(choice);

if(confrim === -1){

    fruits.push(choice);
    
}
else{

    alert("already added");

}

console.log(fruits);































