// Syntax If-Else
// ?if(condition){
//     //code
// ?}else{
//     // code
//  ?}

// var temp = 25;

// if (temp > 30) {
//   console.log("let's go to beach");
// } else if (temp > 20 && temp < 30) {
//   console.log("Watch TV at home");
// } else {
//   ("stay in the bed");
// }

// age = 20;
// isCitizen = true;
// isRegisteredToVote = false;

// if(age>= 18 && isCitizen && isRegisteredToVote){
//     console.log("Eligible to Vote");
// }else if(age<= 18 && !isCitizen && !isRegisteredToVote){
//     console.log("Not Eligible to vote");
// }else if(age >= 18 && !isCitizen){
//     console.log("Not Eligible due to CitizenShip")
// }else if(age>= 18 && isCitizen && !isRegisteredToVote){
//     console.log("Not Eligible due to Registration status")
// }

//? Actual Answer

// if (age >= 18) {
//   if (isCitizen) {
//     if (isRegisteredToVote) {
//       console.log("You're Eligble to vote");
//     } else {
//       console.log("Not Eligible due to Registration");
//     }
//   } else {
//     console.log("Not Eligible due to Citizenship");
//   }
// } else {
//   console.log("Not Eligible to Vote");
// }

// wap to check if a num is even or odd

num = 21;
isPrime = true;

// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// wap to check if a number is prime or not

// Logic is not strong
if (num / num === 1 && num / 1 === num) {
  console.log(num, "is a prime number");
} else {
  console.log(num, "is not a prime number");
}

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log(num, "is not a prime number");
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(num, "is a prime number");
} else {
  console.log(num, "is not a prime number");
}

// wap to check if a number is =version, -ve or zero

// if (num > 0) {
//   console.log("positive");
// } else if (num === 0) {
//   console.log("zero");
// } else {
//   console.log("negative");
// }

// Switch Statement

// var day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("The day is Monday");
//     break;
//   case "Tuesday":
//     console.log("The day is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("The day is Wednesday");
//     break;
//   case "Thursday":
//     console.log("The day is Thursday");
//     break;
//   case "Friday":
//     console.log("The day is Friday");
//     break;
//   case "Saturday":
//     console.log("The day is Saturday");
//     break;
//   default:
//     console.log("No condition matched");
//     break;
// }

// var areaOfShapes = "Square";
// var a = 5;
// var b = 15;
// var result;

// switch (areaOfShapes) {
//   case "Rectangle":
//     result = a * b;
//     console.log(`The Area of Rectangle is ${result}`);
//     break;

//   case "Square":
//     result = a * a;
//     console.log(`The Area of Square is ${result}`);
//     break;

//   case "Circle":
//     var r = 2;
//     result = 3.14 * (2 * 2);
//     console.log(`The Area of Circle is ${result}`);
//     break;

//   default:
//     "The Shape you've given is not included";
// }

// while loop

// var i = 0;

// while(condition){
//     // code-block to be executed as long as the condition is true
// }

// while (i <= 10) {
//   console.log(i++);
// }

// do-While Loop

// do {
//   //code-block to be executed atleast once
// } while (condition);

// var num = 1;

// do {
//   console.log(num);
//   num++;
// } while (num <= 10);

// create a table of 5

// var num1 = 5;
// var i = 0;
// while (i <= 10) {
//   console.log(`${num1} * ${i} = ${num1 * i}`);
//   i++;
// }

// let userInput;
// let positiveNumber;

// do {
//   userInput = prompt("Enter any positive number");
//   positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log("You entered a positive number", positiveNumber);

// for(;;){
//     // Update game logice and render frames
// }

// Calculate the sum of numbers from 1 to 10 using a for loop

// sum = 0;
// for (let i = 1; i <= 10; i++) {
//   //   console.log(`${i} + ${sum} equals to ${sum+=i} `);
//   debugger;
//   // ez to understand 👇
//   var sum = sum + i;
//   console.log(sum);
// }

var year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log(year, "is a leap year");
} else {
  console.log(year, "is not a leap year");
}

for (let i = 0; i <= 10; i++) {
  pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
