

                                    // * For Loop Problems * //
                                    
//Q1

//simple loop

// for (var i = 1; i < 10; i++){
//     console.log("hello" + i);
// }


//Q2
// print 1 to 10

// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }


//Q3
// print 1 to 10 in reverse

// for (var i = 10; i >= 1; i--){
//     console.log(i);
// }


//Q4
// print square from 1 to 10

// for (var i = 1; i <= 10; i++){
//     console.log("square of" + i + "is" + i*i);
// }


//Q5
// print square from 1 to 10 in reverse

// for (var i = 10; i >= 1; i--){
//     console.log("square of" + i + "is" + i*i);
// }


//Q6
// print even numbers only

// for (var i = 1; i <= 20; i++){
//     if(i %2 == 0){
//         console.log(i);
//     }
// }


//Q7
// print odd numbers only

// for (var i = 1; i <= 20; i++){
//     if(i %3 == 0){
//         console.log(i);
//     }
// }


// Q8
// print table of 4 from 1 to 10

// for (var i = 1; i <= 10; i++){
//     console.log(i * 4);
// }


//Q9
// print numbers [1 3 6 10 15 21 28 36 45]

// var num = 0;
// for (var i = 0; i <= 10; i++){
//     console.log("num", num, "i", i);
//     num = num + i ;
//     console.log(num);
// }


//Q10
// print numbers [9 8  7 6 5 4 3 2 1]

// for (var i = 0; i < 10;i++){
//     console.log(9 - i);
// }


//Q11
// print Numbers [19 28 37 46 55 64 73 82 91]
// for (var i = 1; i < 10; i++){
//     console.log(i, 10 - i);
// }


//Q12
// Shown largest number

// var nums = [20, 3, 12, 34, 21, 55, 6, 2];
// var largestNum = 0;
// for (var i = 0; i < nums.length; i++){
//     if (nums[i] > largestNum){
//         largestNum = nums[i];
//     }
// }
// console.log("largest number is ",largestNum);



//Q13
// shown smallest Number

// var nums = [10, 20, 30, 40, 5, 6, 2, 9765]
// var smallestNum= nums[0];
// for (var i = 0; i < nums.length;i++){
//     if(nums[i] < smallestNum){
//         smallestNum = nums[i]
//     }
// }
// console.log("The smallest number is ", smallestNum);


//Q14
// prize bond

// var bonds = [1234, 5624, 7909, 2345, 4567, 1233, 6789, 9987]
// var userbond = prompt("enter a number");
// var won = false;

// for (var i = 0; i < bonds.length; i++){
//     console.log(bonds[i],i);
//     if(bonds[i] == userbond){
//          won = true;
//     }
// }
// if(won){
//     document.write("you won");}
//     else {
//     document.write("you lose")
//     }



// var karachiKeAlaqa = ["Saddar", "Shah Faisal", "Gulshan", "Korangi", "DHA", "Nazimabad", "Maleer", "Hyderi"];
// var userElaqa = prompt ("App ka home kaha hn");
// var deliveryAvailable = false;

// for(var i = 0; i < karachiKeAlaqa.length ; i++){

//     if(karachiKeAlaqa[i] === userElaqa){

//     deliveryAvailable = true;
//     document.write("Delivery Available")
//     break;
//     }
// }

// if(!deliveryAvailable){
//     document.write("Delivery Not Available");
// }




                                                // * Nested Loop * //


// var userPrizeBond = [234, 235, 236, 237, 238, 323, 21, 313, 434, 124, 360];
// var prizeBondWinner = [112, 152, 190, 201, 220, 236, 238, 250, 285, 310, 315, 320, 341, 124, 355, 380, 400];
// var userWon = [];

// for (var i = 0; i < userPrizeBond.length; i++){
//     for(var j = 0; j < prizeBondWinner.length; j++){
//         console.log(userPrizeBond[i],prizeBondWinner[j],userPrizeBond[i] === prizeBondWinner[j]);

//         if(userPrizeBond[i] === prizeBondWinner[j]);{
//         userWon.push(userPrizeBond[i]);
//     }
        
//     }
// }
// console.log("Prize bond ye nikla hen", userWon);



// var students1 = ["Ahmed", "Abdul", "Bilal", "Raza", "Haris", "Arqum"];
// var students2 = ["hassan", "Tabish", "Usman", "Abdul", "Ahsan", "Hamza", "Bilal"];
// var duplication = []

// for (var i = 0; i < students1.length; i++){
//     for(var j = 0; j < students2.length; j++){
//         if(students1[i] === students2[j]){
//             duplication.push(students1[i])
//         }
//     }
// }
// console.log("These names are in both list", duplication)




  // * Hashes * //

// var rows = prompt("Rows");
// var col = prompt("col");

// for (var i = 0; i < rows; i++){
//     var Hashes = "";
//     for (var j = 0; j < col; j++){
//         Hashes = Hashes + "#";
//     }
//     document.write(Hashes + "<br>");
// }


var firstName = ["bilal", "arqum", "raza", "ahemd", "hamza", "Anas"];
var lastName = ["raza", "tariq", "ahmed", "raza", "jawaid", "hadi"];
var fullNames = [];

for (var i = 0; i < firstName.length; i++){
    var fullName = firstName[i] + " " + lastName[i];
    fullNames.push(fullName);
}
console.log(fullNames);


// var string = "Saylani Welfare";
// console.log(string.length);
// console.log(string[2]);
























