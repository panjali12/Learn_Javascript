const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

 console.log(gameName[0]); // h
console.log(gameName.__proto__);// {}


console.log(gameName.length); //13
 console.log(gameName.toUpperCase()); //HITESH-HC-COM
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4)
 console.log(newString);// =>hite as it excludes value at 4rth index

const anotherString = gameName.slice(-8, 4)
 console.log(anotherString); //hite as it takes negative value as 0th index

const newStringOne = "   hitesh    "
  console.log(newStringOne);
console.log(newStringOne.trim()); //trim removes extra spaces in string

const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));