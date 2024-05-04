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



// var heading = document.getElementById("random");
// function generateOTPNumber() {
    
//     var random = Math.round(Math.random() * 10000);
//     heading.innerText = random;
// }


// var string = "ABCDEF1234567sqwrtyuiopsghjklzxvnm";
// var password_h1 = document.getElementById("password");

// var password = "";

// function generatepassword(){
//     password = "";
//     for(var i = 0 ; i < 8 ; i++){
//         var randomNumber = Math.round(Math.random() * string.length);
//         console.log(randomNumber, string.charAt(randomNumber));
//         password = password + string.charAt(randomNumber);
//         console.log(password);
//     }
//     password_h1.innerText = password;
// }



//dice//


var user_number = document.getElementById("user_number");
var random_number = document.getElementById("Random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var total = document.getElementById("total");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var msg = document.getElementById("msg");


var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(usernumber){
  var randomNumber = Math.random() * 6;
  var ceil = Math.ceil(randomNumber);
  console.log(ceil);
  user_number.innerText = usernumber;
  Random_number.innerText = ceil;
  total.innerText = --count;

  if(ceil === usernumber){
    console.log("you won");
    result.innerText = "you win";
    info_box_result.style.backgroundColor = "Green";
    result.style.color = "white";
    //total count me se aik minus kr dn
    win_html.innerText = ++win;
  }else{
    result.innerText = "you loss";
    console.log("you loss")
    info_box_result.style.backgroundColor = "red";
    result.style.color = "white";
    loss_html.innerText = ++loss;
  }
  checkResult();
}

function checkResult(){
  if (count == 0){
    if (win >= 3){
      msg.innerText = "congrats! you won";
    }else{
      msg.innerText = "Sorry ! you loss try again";

    }
    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = loss;
    loss_html.innerText = win;
  }
}