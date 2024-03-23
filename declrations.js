const address = 25516;
let name ='Anjali';
var age = 16;

// address = 514; // => not allowed to change values of const declarations

city ="Kanpur";
// we can declare without using const and let also but its not prefred to use it

/*
Variables declared by let are only available inside the block where they're defined. Variables declared by 
var are available throughout the function in which they're declared.
hence to avoid blocked scope we use let instead of var only
*/
 let surname;
//  we can declare it if we dont know the value

console.table([address , name , age , city , surname]);