//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
//! let fruits = new Array('apple', 'orange', 'banana')

//? Using array literal
//! let fruits = ["apple", "orange", "banana"];
//! console.log(fruits);

//? we can also create an empty array
// let arr = [];
// console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
//!  let fruits123 = ["apple", "orange", "banana"];
//!  console.log("fruits123", fruits123[2]);    //--> output: error because no element at index 3
//! console.log("fruits123", fruits123["apple"]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

//? let fruits123 = ["Apple", "Banana", "Orange"]
//? fruits123["Apple"] = "Mango"
// console.log("fruits123-->", fruits123)  //!! -->  output: fruits123--> [ 'Apple', 'Banana', 'Orange', Apple: 'Mango' ]

let fruits123 = ["Apple", "Banana", "Orange"];
fruits123[0] = "Mango";
// console.log("fruits123-->", fruits123); //   [ 'Mango', 'Banana', 'Orange' ]

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays
let numArr = [1, 2, 3, 4, 5, 6];
let sqArr = [];
for (i in numArr) {
  // sqArr += i ** 2;   //! here '+=' converts array into string, therefore we'll be using .push() method
  sqArr.push(i ** 2);
}
console.log("Square Array is -->", sqArr);

let fruitsABC = ["apple", "orange", "mango", "grapes", "banana"];
//? 1: for of loop , also known as iterable (VALUE/ELEMENT OF ARRAY)
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

for (let item of fruitsABC) {
  // console.log("items of fruitsABC are", item);
}

//! +++++++++++++++   OR   =================

// for(item = 0; item<fruitsABC.length; item++){
//   console.log("using for-loop, printing items", fruitsABC[item]);
// }

//? 2: for in loop (INDEX NUMBER)
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

for (let item in fruitsABC) {
  // console.log("arriving from fruitsABC ----->", fruitsABC[item]);
}

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
//! ❌ forEach() always returns undefined
//! ✅ You must push values into an external array.

// const eachArrFor = fruitsABC.forEach((i)=>{
//   console.log(i, "i'm the item of fruitsABC hello variable");
// })
// console.log(eachArrFor);

array1234 = [];
const myForEachArr2 = fruitsABC.forEach((curElem, index, arr) => {
  if (curElem != null && index != null && arr != null) {
    array1234.push(
      `I'm Current-Element ${curElem} and index of mine is ${index} and i'm from ${arr} array`,
    );
  } else {
    console.log("Null");
  }
  // console.log(arr);
});
// console.log(array1234);

// ? 4: map function
//* map() creates a new array from calling a function for every array element.
//! map() does not change the original array.

const myMapArr = fruitsABC.map((curElem, index, arr) => {
  return ` my fav fruit is ${curElem} `;
  //   //   console.log(arr);
});
// console.log(myMapArr);

//todo Practice Time
//! write a program to Multiply each element with 2  ✅
const numbers = [1, 2, 3, 4, 5];
//* forEach -  Performs an action on each element
//* map -  Creates a new array with transformed elements ✅

//! ALSO INCLUDES EXAMPLE OF CHAINING 👇
const mulBy2 = numbers
  .map((ele) => {
    return ele * 2;
  })
  .map((ele) => ele + 1);
// console.log(mulBy2);

const doubleValue = numbers.forEach((ele) => {
  console.log(ele * 2);
});
// console.log(doubleValue);

//* Key Differences
//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.

//? map: Since it returns a new array, you can chain other array methods after using map.

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element in the original array.

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// The push() method returns the new length.
//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);
//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* SYNTAX
//? splice(start, deleteCount, item1, item2, ...., itemN)
let fals = ["apple", "banana", "orange", "mango"];
// let splicedArr = fals.splice(0, 3, 'kiwi', 'Dragon Fruit', 'safarjan')
// console.log(`Splice Array is ------> ${fals}`)

// //! if want to add element at the end
fals.splice(-1, 0, "grapes");
fals.splice(0, 0, "grapes131231"); //! KHAAS NONDH-> jaha se shuru karega agar vaha par deleteCount '0' hain and kuch add kar rahe hain, to uss index Number ke pehle add kardega
// console.log(`Another Splice Array is ------> ${fals}`)

//* ==========================================================================
//*  Searching in an ARRAY
//* ==========================================================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
const numbers123 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers123.indexOf(3, 1));
// console.log(`when trying to find elements index number which is not present after the given start search from index number, it gives -> ${numbers123.indexOf(3, 4)} always.`)

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present.
//! The array is searched backwards, starting at fromIndex.
// console.log(`The element '3' is at index number -> ${numbers123.lastIndexOf(3, 4)}`)
// console.log(`The element '3' is at index number -> ${numbers123.lastIndexOf(3)}`)

// const result = numbers123.indexOf(6);
// console.log(result);
// const result1 = numbers123.lastIndexOf(6);
// console.log(result1);
// const result = numbers123.indexOf(6, 5);
// console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);
// console.log(numbers123.includes(5))

//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?

const months = ["Jan", "march", "April", "June", "July"];

//* 1: Add Dec at the end of an array?
months.push("Dec");
// console.log(months);

//* 2: What is the return value of splice method?
months.splice();
// console.log(months.splice());   --> output: []

//* 3: Update march to March (update)?
months.splice(1, 1, "March");
// console.log(months);

//* 4: Delete June from an array?
// console.log(months.includes("June"))
// console.log(months.indexOf("June"))
months.splice(3, 1);
console.log(months);

//! OR
const indexToDelete = months.indexOf("June");
months.splice(indexToDelete, 1);
// console.log(months)

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search + Filter
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

const result = numbers123.find((curElem) => {
  return curElem > 6;
});
console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const result2 = numbers123.findIndex((curElem) => {
  return curElem > 15;
});
console.log(result2);

const mapResult = numbers123.map((curElem) => {
  return curElem * 15;
});
console.log(mapResult);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.

// syntax:
//? filter(callbackFn)
//? filter(()=>{}, thisArg)

const numbers12 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

const results = numbers12.filter((curElem) => {
  return curElem >= 4;
});
console.log(results);

//* UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
let value = 6;
const number = [1, 2, 3, 4, 6, 5, 6, 7, 6, 8, 9, 10];

let updateCart = number.filter((curElem) => {
  return curElem !== value;
});
console.log(updateCart);

// Practice time
// !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];
// Filter products with a price less than or equal to 500

const filterProducts = products.filter((curElem) => {
  return curElem.price <= 500;
});
console.log(filterProducts);

// //! Filter Unique Values
// const number = [1, 2, 3, 4, 6, 5, 6, 7, 6, 8, 9, 10];
let uniqueValues = number.filter((curElem, index, arr) => {
  // console.log(`Current Element is ${curElem} and it's index is ${index}`);
  // console.log(index);
  // console.log(arr);
  // console.log(arr.indexOf(curElem));
  return arr.indexOf(curElem) === index;
  // 0 === 0
  // 1 === 1
  // .
  // .
  // .
  // for 6, 4 === 4
  // for 5, 5 === 5
  // for 6, 6 === 4   ❌  therefore won't return
  // for 7, 7 === 7
  // for 6, 4 === 4   ❌  therefore won't return
});
console.log(uniqueValues);

//* OR

console.log(new Set(number));
// output:  Set(10) { 1, 2, 3, 4, 6, 5, 7, 8, 9, 10 }

console.log([...new Set(number)]);
// output: [ 1, 2, 3, 4, 6, 5, 7, 8, 9, 10 ]

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
const fruits12 = ["Apple", "Orange", "Kiwi", "Banana", "Lemon", "Mango"];
console.log(fruits12.sort());
console.log(number.sort());

// For sorting in descending order Compare method is used
//? compare callback function
// syntax
// const sortedNumbers = number.sort((a, b) => a - b)
// if (a > b) return 1 => Switch the Order
// if (b > a) return -1 => Keep the Order

number.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
});
console.log(number);

//? For Ascending Order
// const sortedNumber = number.sort((a, b)=>{
//   if(a > b){
//     return 1;
//   }else if (a < b){
//     return -1;
//   }
// })

//? For Descending Order
const sortedNumber = number.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);

// Original array of strings
const words = ["APPLE", "banana", "cherry", "date"];

const capitalizedArr = words.map((curElem) => {
  curElem.toLowerCase();
  return curElem.toUpperCase();
});
console.log(capitalizedArr);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
const numbers1 = [1, 2, 3, 4, 5];

const evenSqArr = numbers1
  .map((curElem) => {
    if (curElem % 2 == 0) {
      return curElem * curElem;
    }
  })
  .filter((curElem) => {
    return curElem !== undefined;
  });
console.log(evenSqArr);

const evenSquare = numbers1
  .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
  .filter((curElem) => curElem !== undefined);
console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

const names = ["ram", "vinod", "laxman"];
let prefixName = names.map((curElem) => {
  return `Mr. ${curElem}`;
});
console.log(prefixName);

//? Reduce method
//! The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = prices.reduce((total, curElem) => {
  return total + curElem;
}, 0);
console.log(`Total price is --> ${sum}`);

















array = ["Apple", "Banana", "Orange"];

let fruits = new Array("Apple", "Banana", "Orange"); //  Array Constructor
// console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// Array Elements are accessed using zero-based indices.

// console.log(fruits[0]); // "Apple"

// console.log(fruits["Apple"]); //undefined

// Modifying the Array
fruits[2] = "Mango";
// console.log(fruits); // [ 'Apple', 'Banana', 'Mango' ]

// Array Traversal / Iterating over arrays

let fruits1 = ["Apple", "Banana", "Orange", "Mango", "grapes", "Kiwi"];

// for(let items of fruits1){      //! for-of loop
//     console.log(items)
// }

// OR
// console.log(fruits1);

for (let item = 0; item < fruits1.length; item++) {
  // console.log(fruits1[item]);
}
// Apple
// Banana
// Orange
// Mango
// grapes
// Kiwi

for (let items in fruits1) {
  //! For in loop
  // console.log(items);
}

//? Traditional method of using forEach Loop
// fruits1.forEach(function callback(currentValue, index, array) {
//   //* code block
// }, thisValue);

//? Fat Arrow function method of using forEach Loop
// fruits1.forEach((currentValue, index, array) => {
//   //* Code logic goes here
// }, thisValue);

//! using forEach loop 👇

const myForEachArr = fruits1.forEach((curElem, index, arr) => {
  return `${curElem} and it's index is ${index}`;
  //   console.log(fruits1)
});
//? forEach - Performs an action on each element

// console.log(myForEachArr); //!  output: undefined

//! MAP Function

// const myMapArr = fruits1.map((curElem, index, arr) => {
//   return `${curElem} ${index}`;
// });
// //? map - creates a new array with transformed elements

// console.log(myMapArr); //!  output:    [ 'Apple 0', 'Banana 1', 'Orange 2', 'Mango 3', 'grapes 4', 'Kiwi 5' ]

// WAP to multiply each element of array with 2

let arrOfNum = [1, 2, 3, 4, 5, 6];

arrOfNum.forEach((e) => {
  // console.log(e * 2);
});

let elemMulBy2 = arrOfNum.map((e) => {
  return `${e * 2}`;
});

// console.log(elemMulBy2);

//! to write more details on the array methods from the thapa technical website

// let fruits1 = ["hello", "Raju"];
let fruits2 = [];

for (let i = 0; i <= fruits1.length - 1; i++) {
  fruits2.unshift(fruits1);
  // console.log(fruits2);
}

// console.log("Hello World");
// write indexof and lastindexof and see their codes also
