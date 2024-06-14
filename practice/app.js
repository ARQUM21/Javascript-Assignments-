// // var box = document.getElementById("box");
// // console.log(box.style);

// // function red(){
// //     box.style.backgroundColor = "red";
// // }
// // function orange(){
// //     box.style.backgroundColor = "orange";
// // }
// // function blue(){
// //     box.style.backgroundColor = "blue";
// // }
// // function black(){
// //     box.style.backgroundColor = "black";
// // }
// // function yellow(){
// //     box.style.backgroundColor = "yellow";
// // }
// // function pink(){
// //     box.style.backgroundColor = "pink";
// // }




// var heading = document.getElementById("Random");

// function otp(){
//     Ran = Math.round(Math.random() *10000);
//     heading.innerText = Ran;
// }




// dice game

// var usernumber = document.getElementById("user_number");
// var randomnumber = document.getElementById("random_number");
// var result = document.getElementById("result");
// var total = document.getElementById("total");
// var win = document.getElementById("win");
// var loss = document.getElementById("loss");
// var msg = document.getElementById("msg");

// var count = 10;
// var win = 0;
// var loss = 0; 

// function tryMyLuck(usernumber){
//     var randomnumber = Math.random() * 6;
//     var ceil = Math.ceil(randomnumber);
//     console.log(ceil);
//     user_number.innerText = usernumber;
//     random_number.innerText = ceil;
//     total.innerText = --count; 

   
//     if (ceil == usernumber){
//         console.log("you win");
//         result.innerText = "youwin";
//         result.style.backgroundColor = "Green";
//         result.style.color = "white";
//         result.innerText = ++win;  
//     }
//     else{
//         console.log("you loss");
//         result.innerText = "youloss";
//         result.style.backgroundColor = "red";
//         result.style.color = "white";
//         result.innerText = ++loss;
//     }

//     checkResult();
// }

// function checkResult(){
//     if(count == 0){
//         if(win >= 3 ){
//         msg.innerText = "you are win";
//         msg.style.color = "green";
//     }
//     else{
//         msg.innerText = "you are loss";
//         msg.style.color = "red" ;
//     }

//     count = 10;
//     win = 0;
//     loss = 0;
//     total.innerText = count;
//     win.innerText = loss;
//     loss.innerText = win;
// }
// }



// Stop Watch

// var min_html = document.getElementById("min");
// var sec_html = document.getElementById("sec");
// var milli_html = document.getElementById("milli");
// var btn = document.getElementById("start_btn")

// var min = 0
// var sec = 0
// var milli = 0

//  var watchInterval;

// function start(){
//    watchInterval = setInterval(function (){
//     milli++;
//     if(milli == 100){
//         sec++;
//         milli = 0;
//     }
//     if(sec >= 59){
//         min++;
//         sec = 0;
//     }
//     milli_html.innerText = milli
//     min_html.innerText = min < 10 ? '0' + min : min
//     sec_html.innerText = sec < 10 ? '0' + sec : sec   },1) 
//     btn.disabled = true       
// }
// function stop(){
//   clearInterval(watchInterval)
//   btn.disabled = false
// }
// function reset(){
//    clearInterval(watchInterval)
//    min_html.innerText = 0
//    sec_html.innerText = 0
//    milli_html.innerText = 0
//   btn.disabled = false
// }






// bakra Eid countdown



// var seconds_html = document.getElementById("seconds");
// var mins_html = document.getElementById("mins");
// var hours_html = document.getElementById("hours");
// var day_html = document.getElementById("day");

// var now= new Date()
// var baqra = new Date('6/17/2024')



// var diff =baqra.getTime() - now.getTime();





// var interval = setInterval(function (){
    
//     var currentDate = new Date()
//     diff = diff - 1000;
    
//     var day = diff / 1000 / 60 / 60 / 24;
//     var hours = 24 - currentDate.getHours();
//     var mins = 60 - currentDate.getMinutes();
//     var seconds = 60 - currentDate.getSeconds();
    
    
//     seconds_html.innerText = Math.round(seconds);
//     mins_html.innerText = Math.round(mins);
//     hours_html.innerText = Math.round(hours);
//     day_html.innerText = Math.round(day);

// },1000)



//mutable and immutable//

//mutable can be update and immutable canot be update

// var string = "hello world" //immutable

// string[0] = "H"

// string = string.replace("h" , "H")

// console.log(string)

// var array = ["1", "2", "3" , "4"] //mutable

// array.push(5);
 
// console.log(array)


// var obj = {
//     name:"Arqum",
// };

// obj.name = "Arqum Tariq"

// console.log(obj)


// var a = "hello"
// var b = a;

// a = "hello world!"

// console.log("A=>",a)
// console.log("B=>",b)


// var c = 100;
// var d = c;

// d = 90;

// console.log("C=>", c)
// console.log("D=>", d)


// var obj1 = {
//     name: "Arqum",
// };

//  var  obj2 = obj1;

// obj1.name = "Arqum Tariq";

// console.log("OBJ1=>",obj1)
// console.log("OBJ2=>",obj2)


// var todos = [
//     {todo: "chai peni hn", isDone: false },
//     {todo: "office jana hn", isDone: false },
//     {todo: "email check krni hn", isDone: false },
//     {todo: "ghr jana hn", isDone: false },
// ]

// var todo = todos[1]
// todo.isDone = true

// console.log(todos)


// // Immutable ko jab ham compare krte to ham value ko match krte hen jab ke match mein hum reference ko match krte hen.

// var num1 = 10
// var num2 = 10

// console.log(num1 === num2);


// var arr1 = ["1", "2", "3", "4"]
// var arr2 = ["1", "2", "3", "4"]

// console.log(arr1 === arr2);

// var arr1 = ["1", "2", "3", "4"]
// var arr2 = ["1", "2", "3", "4"]
// var arr3 = arr2;

// console.log(arr3 === arr2);




/// local storage

// simple string save krna
// localStorage.setItem ("email" ,"marqum987@gmail.com")

// // get data from local storage
// var email = localStorage.getItem("email")
// console.log(email)

// var todos = ["bilal", "raza", "arqum", "tariq"]
// var todosstring = JSON.stringify(todos)
// localStorage.setItem("todos", todosstring)

// var todos = localStorage.getItem("todos")
//  todos = JSON.parse(todos)
// console.log(todos)





