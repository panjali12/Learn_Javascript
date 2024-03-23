 console.log(2 > 1);
console.log(2 >= 1);
 console.log(2 < 1);
 console.log(2 == 1);
 console.log(2 != 1);


  console.log("2" > 1);
//=> true (but it may be possible that it may not give predictable result)
 console.log("02" > 0);

 console.log(null > 0);//=> false  
  console.log(null == 0);// =>false
 console.log(null >= 0);// =>true as it is considering null as 0
 //in js equality operator and comparison operator works differently

console.log(undefined == 0);
 console.log(undefined > 0);
 console.log(undefined < 0);
 // avoid these types of comparisons 

// === strict cheack as it not only cheacks value but also the datatype 

console.log("2" === 2);