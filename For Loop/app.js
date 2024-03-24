

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




























