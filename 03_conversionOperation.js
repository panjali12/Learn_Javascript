let score = "Hundred";
 //console.log(typeof score) //=> string

let scoreInNumber = Number(score);
//console.log(typeof scoreInNumber);//=> number
//console.log(scoreInNumber);// => NaN (Not a number)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isSleeping = "Anjali";
let booleanIsSleeping = Boolean(isSleeping);
console.log(booleanIsSleeping)
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
 //console.log(typeof stringNumber);

 // *********************** Operations ***********************

let value = 3
let negValue = -value
 console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); =>12
// console.log(1 + "2"); =>12
// console.log("1" + 2 + 2); =>122
// console.log(1 + 2 + "2"); =>32

// console.log( (3 + 4) * 5 % 3);=> use appropriate paranthesis to enhance readability

// console.log(+true); =>not allowed
// console.log(+""); => not allowed

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);