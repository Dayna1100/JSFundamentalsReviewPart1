/* Working with variables and numbers

let total = 40;
const blue = 'color';
var happy = true;
 
total = 2  

Why might you choose to use the const keyword? To ensure variable cannot be changed outside scope.

What is one reason it not best practice to use the var keyword? 
Variables declared by let are only available inside the block where they're defined. Variables 
declared by var are available throughout the function in which they're declared.

What operator can you use to find out if a variable contains a number? typeof
*/

/*
let toy = total + 15
toy-=8
console.log(toy);

total = 26 + 44 + 72 + 86 + 112
let average = total / 5
console.log(average); 

let theNumber = 14;
console.log(++theNumber)


console.log(typeof total); 
//COMMENT- make sure typeof is lower case!


/* mad lib working with strings
let action = 'ran';
let thing = 'chair';
let girl = 'pretty';
let flower = 'red';
let friend = 'Susan';

let madlib ='phrase';

madlib = "We " + action + " to the store.\n" + "To buy a " + thing + ".\nWe saw a " + girl + " girl.\nI gave her a " + flower +  " flower. \nHer name was " + friend + ".";
console.log(madlib)  */

// Create a variable called madlibLiteral. Refactor your Madlib using template literals and interpolation. 
// Print the new variable to the console.
// Why would we want to convert a string to a number in JavaScript and what is one way to accomplish this? 
//  
/*
 let action = 'ran';
 let thing = 'chair';
 let girl = 'pretty';
 let flower = 'red';
 let friend = 'Susan';

let madLibliteral = `We ${action} to the store.
 To buy a ${thing}.
 We saw a ${girl} girl.
 I gave her a ${flower} flower.
 Her name was ${friend}.`; 

 console.log(madLibliteral);
*/
// See image of console output in images folder!
// Why would we want to convert a string to a number in JavaScript and what is one way to accomplish this?
// One way to convert a string into a number is to use a basic math operation. You can multiply the string 
// value by 1 and it will return a number:

 //const quantity = "12";

 // console.log(quantity * 2);


// Conditionals   
/*
let x = 2;
let y = 4;

if (x >= y) {
    console.log("Hello World")
} else {
    console.log("Goodbye World")
}
What are some examples of falsy values in JavaScript?
false, 0, undefined, NAN, null or empty strings are falsy.

What will the following code output to the console and why?  
answer: condition 5 is true  - because == converts the number to a string so 0 == "0" is true
condition 1 is stricty equal and "0" is a string so it is false.
condition 2 is false because 8 is not greater than converted string 9
condition 3 is false because the typeof number2 is a string and it does not strictly equal string "number"
condition 4 is false because there are 2 parts...first part is true but the second part is false
so defaults to false
***else no condition was true - is false because condition 5 is true.


let number1 = 8;
let number2 = "9";

if("0" === 0){
    console.log("condition 1 is true")
}else if(number1 > number2){
    console.log("condition 2 is true")
}else if(typeof number2 === "number"){
    console.log("condition 3 is true")
}else if(typeof number2 !== "number" && number1 > number2){
    console.log("condition 4 is true")
}else if("0" == 0){
    console.log("condition 5 is true")
}else{
    console.log("no condition was true")
}

What is the difference between the == and === operator? What is the best practice to use and why?
== converts types result and === means strictly equal to
best practice is to use tripe equals === to get accurate result. conversions not always what you think in js.

Refactor the if statement below to use a ternary operator:   (this result is the popcorn is delicous)
let addButter = true;
let popcorn = "The popcorn is ready!";

if(addButter) {
    popcorn = "The popcorn is delicious!";
} else {
    popcorn =  "The popcorn is good but could use some butter :("
}
console.log( popcorn )
*/

// Ternary operator used in this statement: ******* went back and refactored - and add popcorn 5/7
// to the ternary statement.   new answer below will be: the popcorn is good but could use some butter because one of
// the conditions is false.

//stacys answer:
// (addButter) ? popcorn = "The popcorn is delicious!" : popcorn =  "The popcorn is good but could use some butter :("
// console.log( popcorn );

// my answer:
//let addButter = true;
//let popcorn = "The popcorn is ready!";
//let message = (addButter && !popcorn) ? "The popcorn is delicious!" : "The popcorn is good but could use some butter :(";

//console.log(message)
/*
What will the code below output and why?  
The output is "I did not get tickets" because the conditional contains false && true which equals 
the false statement of "I did not get tickets"

let soldOut = true;    // !soldOut  means soldOut = false;
let onSale = true

let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(message);

Refactor the code from the previous question to use an if statement to instead 
of ternary to set the message variable.

*** need to add the ! not sybol and refactor soldout etc....done 5/7

let soldOut = true;
let onSale = true;

if(!soldOut, onSale) {
    message = "I did not get tickets";
} else {
    message =  "I got the tickets"
}

console.log(message);
*/


// Loops section - Write a for loop that counts from 0 to 100, printing each number to the console. tested - works!

//for(let i = 0; i<=100; i++) {
 //   console.log(i);
//}

//Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console. tested - works!
//for(let i = 0; i<=100; i+=2) {
//   console.log(i);
//}

// Write a for loop that counts down from 100 to 0, printing each number to the console. tested - works!

//for(let i = 100; i>=0; i--) {
  //  console.log(i);
//}

//Write a for loop that counts from 0 to 50 but only prints the odd numbers that are multiples of 5 to the console. 
// stacy assisted with modulo below...review later!!!5/8 
//for(let i = 0; i<=50; i++) {
  //  if (i % 2 !== 0 && i % 5 == 0)
    //console.log(i);
 //}
/*
Keeping track of a total with a loop.

- Create a variable called total and assign it a value of 0 (make sure total is defined outside of your loop).
- Create a loop that counts from 1 to 10, incrementing by 1.
- On each iteration of the loop, add 3 to the total variable in step 1.
- After your loop, print the value of total to the console.

------ask Stacy about this one monday - left off here 5/7
*/
// let total = 0;

// for(let i = 1; i<=10; i++) {
//     total = total +3;
// }
// console.log(total);

// Refactor the last questions loop to use the while() loop syntax

// Try to find sum of total and print after - complete - see sum below

//let total = 0;
//let sum = 0;
// while (total <= 10) {
//     console.log(total);
//        total++;
// }
// console.log(total);

//while (total <= 10) {
  //    total+=3;
    //  sum += total;;     
 //}
 //console.log(sum); 
//  What do the continue and break statements do in JavaScript in the context of a loop?

// continue statement - breaks one iteration (in the loop) if a specified condition occurs, 
// and continues with the next iteration in the loop. (jumps over)

// break statement - in a loop stops the loop from running and finishes executing rest of 
// code outside of loop if any. (jumps out)

// Fizz Buzz Interview Question:

// Write a loop that prints all numbers from 1 - 100.
// - If a number is divisible by 3 log "Fizz" instead of the number.
// - If a number is divisible by 5 log "Buzz" instead of the number.
// - If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// let i = 1;
// while (i<100) {
//     let output = "";

//     if (i % 3 ===0) {
//         output += "Fizz";
//     }
//     if (i % 5 ===0) {
//         output += "Buzz";
//     }
//     //if (i % 3 ===0 && i%5 ===0)  this section is redundant and not needed.!!
//       //  output += "FizzBuzz";

//     if (output !== "") {
//         console.log(output);
//     }
//     else {
//         console.log(i);
//     }
//     i++;
// }
/*
// Alternate way to solve:
for (let i =1; i<=100; i++) {
    let output = "";
    // if divisible by 3 print Fizz
    if (i % 3 ===0)  {
        output += "Fizz";
    } 
    // if divisible by 5 print Buzz
    if (i % 5 ===0)  {
        output += "Bizz";
    } 
    // if divisible by 3 and 5 print FizzBuzz   ---this section (3 lines) is redundant and not needed.!!
      if (i % 3 ===0 && i%5 ===0)
        output += "FizzBuzz";

    // if output not empty log it
    if (output !== "") {
        console.log(output);
    }
    //otherwise log i to console
    else {
        console.log(i);
    }
}




What is the difference between the do...while() and the while() or for() loop?

do...while() - do…while test condition after the code block execute
It executes a specified statement until the test condition evaluates to false.

while() - (use while a condition is true)(while loops test condition at the beginning).
It executes a specified statement as long as the test condition evaluates to true.

for() - repeats until a specified condition evaluates to false.
*/