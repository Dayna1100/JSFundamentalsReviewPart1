# JSFundamentalsReviewPart1
# JavaScript Fundamentals Review Exercises: Part I

## Instructions 

For this exercise, you will work watch the videos and work through the exercises.  

For each individual exercise:
1. Review all questions before reviewing any content or working on solutions.
3. After reviewing the provided resources, do your best to answer the questions and work through the solutions.
4. After completing each part of the review, we will discuss each section as a larger group in the next live session.

> Take note of anything that went well and/or did not go well for you in a given section. These are great observations to bring up in the live session.

**Make sure to create a project structure that will allow you to run your code in a browser**

## Working with variables

[JavaScript: Getting Started - Variables and Constants (Module) ~25m](https://app.pluralsight.com/course-player?clipId=52d9042d-5a00-4e85-8333-32e2b4da9e5e)

1. Declare and assign values to 3 variables using each of the following keywords `let`, `const`, and `var`.

2. Use `console.log()` to display the value of the variables in the browser's console.

3. Change the value of the variables declared with the `let` and `var`.  Print their new value to the console with `console.log()`

4. What happens if you try to change the value of the variable declared with the `const` and print its new value to the console? 

5. Why might you choose to use the `const` keyword?

6. What is one reason it not best practice to use the `var` keyword?


## Working with Numbers
[JavaScript: Getting Started - Numbers (Video) ~7m ](https://app.pluralsight.com/course-player?clipId=c9cd215e-ea5e-42f1-a394-3eec0e7dab27)

[JavaScript: Getting Started - Operator Precedence (Video) ~3m ](https://app.pluralsight.com/course-player?clipId=b8c38a09-0575-4223-9420-c415cd8270f4)

> Print the output at each step to the console so you can see what's happening.

1. Create a variable using the `let` keyword and assign a number to it.
 
2. On a new line, add 15 to your variable

3. On a new line, subtract 8 from your variable without using the variable when calculating the new value

4. Calculate the average of 26, 44, 72, 86, 112. Assign the calculated average to a new variable.

5. Modify the following code so it outputs 15 without adding any new lines of code.
```js
let theNumber = 14;
console.log(theNumber++)
```

6. What operator can you use to find out if a variable contains a number?

## Working with Strings
[JavaScript: Getting Started - Strings (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=8be03868-8c7d-43ca-89f7-858b276d84cb)

[JavaScript: Getting Started - Manipulating Strings (Video) ~6m ](https://app.pluralsight.com/course-player?clipId=fa4ab367-6bfb-4093-b795-9b2166cb6e06) 

[MDN Template literals (Template strings) and Interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

1. Create 5 variables. All variables should be assigned a `string` value.
  - Assign 1 variable a verb
  - Assign 1 variable a noun
  - Assign 1 variable an adjective
  - Assign 1 variable a color
  - Assign 1 variable a name

2. Create a variable called `madlib` and assign it a `string` value.
    - Use all the variables created in step one to construct a Madlib. 
    - Use the `+` operator for concatenation when building your Madlib.
    - Use the appropriate escape characters to make sure each sentence in the Madlib appears on a new line.
    - Print the Madlib to the console

3. Create a variable called `madlibLiteral`. Refactor your Madlib using template literals and interpolation. Print the new variable to the console.

4. Why would we want to convert a `string` to a `number` in JavaScript and what is one way to accomplish this?

## Conditionals
[JavaScript: Getting Started - Conditionals Using If() (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=fb0da161-c514-4cbb-b56c-3de5739c3312)

[JavaScript: Getting Started - Truthy and Falsy (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=b9b97e8f-2f9f-4d19-8cd6-bde3e748b9a6)

[JavaScript: Getting Started - if...else (Video) ~4m ](https://app.pluralsight.com/course-player?clipId=9a678f6d-e96e-41dd-884f-56998b4d0993)

[JavaScript: Getting Started - Comparing === and == (Video) ~3m](https://app.pluralsight.com/course-player?clipId=50e18eeb-fbce-42ab-b287-8a47ea835b9f)

[JavaScript: Getting Started - The Ternary Operator (Video) ~3m](https://app.pluralsight.com/course-player?clipId=7c6a5c02-203b-44d1-b071-a5fe65833e97)

1. Create 2 variables, x and y, and assign them a number value.

2. Using an if statement, print "Hello World" to the console if `x` is greater than `y`;

3. Update the if statement to print "Goodbye World" to the console if `x` is not greater than `y` without modifying the existing condition.

4. What are some examples of *falsy* values in JavaScript?

5. What will the following code output to the console and why?
```js

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
```

6. What is the difference between the `==` and `===` operator? What is the best practice to use and why?

7. Refactor the `if` statement below to use a ternary operator:
```js

let addButter = true;
let popcorn = "The popcorn is ready!";

if(addButter) {
    popcorn = "The popcorn is delicious!";
} else {
    popcorn =  "The popcorn is good but could use some butter :("
}


console.log( popcorn )
```

8. What will the code below output and why? 
```js
let soldOut = true;
let onSale = true

let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(message);
```

9. Refactor the code from the previous question to use an `if` statement to instead of ternary to set the `message` variable.

## Loops (for and while)
[JavaScript: Getting Started - Looping with for() (Video) ~6m ](https://app.pluralsight.com/course-player?clipId=777fefa5-2a29-4c42-bc3a-e9b8e65cbded)

[JavaScript: Getting Started - Looping with while() (Video) ~3m ](https://app.pluralsight.com/course-player?clipId=a6d368db-0ed7-46a0-9063-e522879ec8f2)

[JavaScript: Getting Started - Looping with do...while() (Video) ~3m ](https://app.pluralsight.com/course-player?clipId=2328c82a-9106-418f-85e1-773067444677)

1. Write a for loop that counts from 0 to 100, printing each number to the console.

2. Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console.

3. Write a for loop that counts down from 100 to 0, printing each number to the console.

4. Write a for loop that counts from 0 to 50 but only prints the odd numbers that are multiples of 5 to the console.

5. Keeping track of a total with a loop.
    - Create a variable called `total` and assign it a value of `0` (make sure `total` is defined outside of your loop).
    - Create a loop that counts from 1 to 10, incrementing by 1.
    - On each iteration of the loop, add `3` to the `total` variable in step 1.
    - After your loop, print the value of `total` to the console.

6. Refactor the last questions loop to use the `while()` loop syntax

7. What do the `continue` and `break` statements do in JavaScript in the context of a loop?

8. Fizz Buzz Interview Question
    - Write a loop that prints all numbers from 1 - 100.
    - If a number is divisible by 3 log "Fizz" instead of the number.
    - If a number is divisible by 5 log "Buzz" instead of the number.
    - If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

9. What is the difference between the `do...while()` and the `while()` or `for()` loop?



