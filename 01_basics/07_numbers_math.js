// =====================================
// 1. JAVASCRIPT NUMBERS
// =====================================

// Numbers are used to store numeric values.
// JavaScript has one main Number type for integers and decimals.

let age = 20;
let price = 99.99;
let temperature = -5;

console.log(age);         // Output: 20
console.log(price);       // Output: 99.99
console.log(temperature); // Output: -5


// =====================================
// 2. BASIC MATHEMATICAL OPERATORS
// =====================================

let a = 10;
let b = 3;

console.log(a + b);  // Addition:       13
console.log(a - b);  // Subtraction:     7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division:        3.333...
console.log(a % b);  // Remainder:       1
console.log(a ** b); // Power (10³):  1000


// =====================================
// 3. IMPORTANT NUMBER METHODS
// =====================================

// 1. toFixed() - Sets decimal places.
// Returns a STRING, not a number.

let num = 12.5678;
console.log(num.toFixed(2)); // Output: "12.57"


// 2. toString() - Converts a number into a string.

let number = 100;
console.log(number.toString()); // Output: "100"


// 3. Number() - Converts a value into a number.

console.log(Number("50"));  // Output: 50
console.log(Number("abc")); // Output: NaN


// 4. parseInt() - Extracts an integer from a string.

console.log(parseInt("25.99")); // Output: 25
console.log(parseInt("100px")); // Output: 100


// 5. parseFloat() - Extracts a decimal number.

console.log(parseFloat("25.99")); // Output: 25.99
console.log(parseFloat("10.5kg")); // Output: 10.5


// 6. Number.isInteger() - Checks whether a value is an integer.

console.log(Number.isInteger(25));   // Output: true
console.log(Number.isInteger(25.5)); // Output: false


// 7. Number.isNaN() - Checks whether a value is NaN.

console.log(Number.isNaN(NaN));     // Output: true
console.log(Number.isNaN("hello")); // Output: false


// =====================================
// 4. JAVASCRIPT MATH OBJECT
// =====================================

// Math is a built-in JavaScript object.
// It provides useful mathematical functions.
// You do not need to create a Math object using new.


// 1. Math.round() - Rounds to the nearest integer.

console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.3)); // Output: 4


// 2. Math.floor() - Rounds DOWN to the nearest integer.

console.log(Math.floor(4.9)); // Output: 4
console.log(Math.floor(4.1)); // Output: 4


// 3. Math.ceil() - Rounds UP to the nearest integer.

console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.ceil(4.9)); // Output: 5


// 4. Math.trunc() - Removes the decimal part.

console.log(Math.trunc(4.9));  // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4


// 5. Math.abs() - Returns the positive distance from zero.

console.log(Math.abs(-10)); // Output: 10
console.log(Math.abs(10));  // Output: 10


// 6. Math.sqrt() - Finds the square root.

console.log(Math.sqrt(25)); // Output: 5
console.log(Math.sqrt(81)); // Output: 9


// 7. Math.pow() - Calculates power.

console.log(Math.pow(2, 3)); // Output: 8
// 2 raised to the power 3 = 2 × 2 × 2


// 8. Math.max() - Returns the largest number.

console.log(Math.max(10, 50, 20, 80)); // Output: 80


// 9. Math.min() - Returns the smallest number.

console.log(Math.min(10, 50, 20, 80)); // Output: 10


// 10. Math.random() - Generates a random decimal from 0 (inclusive) to 1 (exclusive).

console.log(Math.random()); // Output: A random decimal, e.g. 0.7352


// 11. Random integer between 1 and 10.

console.log(Math.floor(Math.random() * 10) + 1);
// Output: Random integer from 1 to 10


// 12. Math.PI - Returns the value of PI.

console.log(Math.PI); // Output: 3.141592653589793


// =====================================
// 5. USEFUL REAL-WORLD EXAMPLES
// =====================================

// Example 1: Calculate total price.

let itemPrice = 100;
let quantity = 3;

let total = itemPrice * quantity;

console.log(total); // Output: 300


// Example 2: Calculate percentage.

let obtainedMarks = 450;
let totalMarks = 500;

let percentage = (obtainedMarks / totalMarks) * 100;

console.log(percentage); // Output: 90


// Example 3: Generate a random OTP (6 digits).

let otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp); // Output: Random 6-digit number


// Example 4: Convert string input into a number.

let userInput = "250";
let convertedNumber = Number(userInput);

console.log(convertedNumber + 50); // Output: 300


// =====================================
// 6. IMPORTANT DIFFERENCE
// =====================================

// Math.round()  = Nearest integer
// Math.floor()  = Round down
// Math.ceil()   = Round up
// Math.trunc()  = Remove decimal part
// Math.abs()    = Positive distance from zero
// Math.random() = Random decimal between 0 and 1

// Number()      = Convert to number
// parseInt()    = Extract integer
// parseFloat()  = Extract decimal
// toFixed()     = Format decimal places (returns string)