// There are two TYPES OF DATATYPES

// 1. Primitive Data Types:
// * i. String
// * ii. Numbers
// * iii. Boolean
// * iv. Undefined
// * v. Null
// * vi. Bigint
// * vii. Symbol

 
// 2. Object Data Types
// i. An Object
// ii. An Array
// iii. A Date

// ? 1. What is the difference btw null and undefined in Js?
Undefined:
// * A variable exists, but no value has been assigned yet.
// * let user;   // undefined

Null:
// * A variable is explicitly assigned "no value"
// * let user = null;   // null


// ? 2. What is the purpose of type operator in Js?
The typeof operator is used to determine/Find the data-type of a value or variable at runtime.

// ? 3. What is the result of `typeof null` in Js?
typeof null;  // ! object
Why?
-> This is a historical bug in JavaScript
-> null is not actually an object
-> The bug was kept to maintain backward compatibility


// ? 4. What are primitive data types in Js?
--> @ the top of this page: numbers, string, boolean, bigint, Null, Symbol and Undefined

// ? 5. Explain the concept of truthy and falsy values in Js. Provide examples?
Truthy:
Values that evaluate to true are "truthy values"
examples:
👉 true
👉 Any non-empty string ("Hellow")
👉 Any non-zero Number (23,234)
👉 Arrays and Objects, even if they're empty
// 1, -1, "hello", "0", [], {}, function(){}

Falsy:
Values that evaluate to true are "truthy values"
examples:
👉 true
👉 Any non-empty string ("Hellow")
👉 Any non-zero Number (23,234)
👉 Arrays and Objects, even if they're empty
// 1, -1, "hello", "0", [], {}, function(){}

empty-Array [] == False   ----> true(makes array look falsy, but it's the game of Type Coercion)
step 1->        [] == false
step 2->        "" == 0
step 3->        0 == 0
step 4->        true

empty-Array [] === False    ----> false(No type Coercion)
[] → object
false → boolean
❌ Different types
❌ No conversion
❌ Result: false


Falsy Values: examples
false
0
-0
0n
""
null
undefined
NaN(Not a Number)


// ? 6. Convert String into Number?
let a = "10";  // String
console.log(typeof (a));   // string  "10"
console.log(typeof +a);   // converted into number, just by using '+' operator,  10



// ? 7. Convert Number into String?
let anotherString = 10; // Number
console.log(typeof (anotherString));   // Number
console.log(typeof (anotherString+""));   // converted into number, just by using '(variableName + ""/'') ' operator,  "10"


// ? 8. To check if a non-empty string is truthy or false in Js, we can directly use "if statement".

if("hello"){
    console.log("This is truthy")
}
else{
    console.log("This is Falsy value");
    
}

// * output: This is truthy.



// * ================== parseInt & parseFloat section =================
// ? parseInt and parseFloat are both an functions in Js used for converting strings to numbers, but they have different use cases.

// * parseInt: Define: parseInt is used to parse a string and convert it into a Number/Integer(Whole number)
const myString = "42"
const myNumber = parseInt(myString, 10);
console.log(myNumber);
// ? output: 42

// * parseFloat: Define: parseFloat is used to parse a string and convert it into a Floating-point Number (decimal number).

// ! if

const myString = "42.5"
const myNumber = parseInt(myString);
console.log(myNumber);
// ? output: 42 ❌❌    <-- it should be 42.5

// ! therefore

const myString = "42.5";
const myNumber = parseFloat(myString);
console.log(myNumber)
// ? output: 42.5✅✅


//? What is the purpose of the NaN value in JavaScript? 
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use "isNan()" function.

// * =========== parseInt & parseFloat End Section ===============