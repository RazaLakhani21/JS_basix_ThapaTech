// * ==========================
// * Data Types Section - part 2
// * ==========================

// "vinod" + "thapa"   -> vinodthapa
// 👆 "+" operator is used for concating two strings

// Type coercion is the automatic conversion of "values" from one data type to another
//? There are two types of coercion in JavaScript: Implicit and Explicit
//* Implicit happens automatically
//* Explicit is done manually by Programmer.

//! It's essential to be aware of how JS handles these situations, because type coercion can lead to unexpected results
// Because:  👇

console.log(10 + "20")   // output:  "1020"
console.log(9 - "5")   // output:  4
console.log("Java" + "Script")   // output:  JavaScript
console.log(" " + " ")   // output:  "  "  ("space" + "space"  --> "2xspace")
console.log(" " + 0);   // output:  " 0" (with spaced string converted zero)
console.log("vinod" - "thapa")   // output:  NaN
console.log(true + true)   // output:  2
console.log(true + false)   // output:  1
console.log(false + true)   // output:  1
console.log(false - true)   // output:  -1