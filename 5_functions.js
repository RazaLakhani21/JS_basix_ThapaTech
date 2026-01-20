function functionName(parameters) {
  // code to be executed  OR  Function Body
  return result; //optional return statement
}

// Question
// 3 students at a same time wants to find the sum of two numbers
// 1st Student
var a = 5;
var b = 10;
var c = 15;
var d = 20;
var e = 25;
var f = 12;

//! Function Declaration
function sumOfTwoNumbers(p1, p2) {
  //? p1 & p2 here's the Function-Parameter
  let sum;
  sum = p1 + p2;
  return console.log(sum);
}

//! Function Invocation
// sumOfTwoNumbers(a, b);
// sumOfTwoNumbers(c, d);
//? whereas the values given in the paranthesis is called
// sumOfTwoNumbers(e, f);

// const result = function sum(a, b) {
//   console.log(a + b);
// };

// result(5, 20); // 25
// result; // no error no output

const anonymous = function (a, b) {
  console.log(a + b);
  return a + b;
};

result = anonymous(5, 20); // 25

// console.log(result); // if not given return, output: Undefined

//? IIFE - Immediately Invoked Function Expression
//! Syntax:
//* function(){
// Code block to be executed
//* }()

(function (a, b) {
  // console.log("Hello World", a, "+", b, "is", a + b);
})(a, b);

// Question.1 Reverse a String: using built-in reverse string method
// Question.2 Palindrome Check: create a funciton to check if a given string is plaindrome (reads the same backwards as forward)?
// Question.3 Calculator Function: WAF takes two numbers and operator as param and return the result of the operation. The function should support Addition, subtraction, Multiplication and Division.

// 1. WAJS function Calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

function calculator(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      return `The calculation of ${a} ${operator} ${b} is --> ${a + b}`;
    case "-":
      return `The calculation of ${a} ${operator} ${b} is --> ${a - b}`;
    case "*":
      return `The calculation of ${a} ${operator} ${b} is --> ${a * b}`;
    case "/":
      if (b === 0) {
        return `0 is not allowed`;
      }
      return `The calculation of ${a} ${operator} ${b} is --> ${a / b}`;
    default:
      return "no operator found";
  }
}

// console.log(calculator(12, 2, "/"));

// WAF to reverse a given string without using built-in reverse method.

function reversingString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // if(i<0){
    //   break
    // }else{
    //   console.log(str[i]);
    // }
    // OR do changes in the for loop's condition part as making i>=0
    // console.log(str[i]);
    reversedStr = reversedStr + str[i];
    // result = [];
    // result.push(str);
    // console.log(result);
  }
  return reversedStr;
  // let reversedStr = ""
  // str.split("")
  // str.slice(-1, 0)
  // console.log(str.join(reversedStr))
}

console.log(reversingString("Hello"));

// WAF to determine if a given string is a palindrome (reads the same backward as forward).

const isReverse = (str) => {
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i]
  }
  // if(str === reversedStr){
  //   return `${reversedStr} is a palindrome`
  // }else{
  // return `${reversedStr} is not a palindrome`
  // }
  return str === reversedStr? `${reversedStr} is a palindrome`:`${reversedStr} is not a palindrome`
};


console.log(isReverse("isi"))
