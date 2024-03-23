/*JavaScript is a dynamically typed language, which means that data types of variables are determined by 
the value they hold at runtime and can change throughout the program as we assign different values to them.*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

/*Primitive datatypes and their return type:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint*/



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
 /*Non-primitive datatypes and their return types:
Array - object
Function - function(object)
Object - object
*/


console.log(typeof anotherId);

//datatypes are based on memory allocation
/*Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol)
 ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) 
-> heap memory

JavaScript is a dynamically typed language. 
This means that you don't need to specify the data type of a variable when you declare it.*/

// https://262.ecma-international.org/5.1/#sec-11.4.3