// =====================================
// JAVASCRIPT STRINGS
// =====================================

// A string is used to store text.
// Strings can use single quotes, double quotes, or backticks.

let name = "Surya";
let city = 'Bangalore';
let message = `Hello ${name}`;

console.log(name);    // Output: Surya
console.log(city);    // Output: Bangalore
console.log(message); // Output: Hello Surya


// =====================================
// TOP 15 MOST-USED STRING METHODS
// =====================================

let text = "  JavaScript is Awesome  ";

// 1. length - Counts characters
console.log(text.length); // Output: 25

// 2. toUpperCase() - Converts to uppercase
console.log(text.toUpperCase()); // Output: "  JAVASCRIPT IS AWESOME  "

// 3. toLowerCase() - Converts to lowercase
console.log(text.toLowerCase()); // Output: "  javascript is awesome  "

// 4. trim() - Removes spaces from beginning and end
console.log(text.trim()); // Output: "JavaScript is Awesome"

// 5. includes() - Checks if text exists
console.log(text.includes("JavaScript")); // Output: true

// 6. indexOf() - Finds the position of text
console.log(text.indexOf("is")); // Output: 14

// 7. lastIndexOf() - Finds the last position
console.log("hello hello".lastIndexOf("hello")); // Output: 6

// 8. slice() - Extracts part of a string
console.log("JavaScript".slice(0, 4)); // Output: Java

// 9. substring() - Extracts part of a string
console.log("JavaScript".substring(4, 10)); // Output: Script

// 10. replace() - Replaces the first matching text
console.log("Hello Surya".replace("Surya", "Rahul")); // Output: Hello Rahul

// 11. replaceAll() - Replaces all matching text
console.log("hi hi hi".replaceAll("hi", "hello")); // Output: hello hello hello

// 12. split() - Converts a string into an array
console.log("HTML CSS JavaScript".split(" ")); 
// Output: ["HTML", "CSS", "JavaScript"]

// 13. charAt() - Returns character at a position
console.log("Surya".charAt(0)); // Output: S

// 14. startsWith() - Checks the beginning of a string
console.log("JavaScript".startsWith("Java")); // Output: true

// 15. endsWith() - Checks the ending of a string
console.log("JavaScript".endsWith("Script")); // Output: true


// =====================================
// TEMPLATE LITERALS
// =====================================

let student = "Surya";
let age = 20;

// ${} inserts variables inside backticks
console.log(`My name is ${student} and I am ${age} years old.`);
// Output: My name is Surya and I am 20 years old.


// =====================================
// STRINGS ARE IMMUTABLE
// =====================================

// String methods return a new string.
// They do not change the original string.

let language = "javascript";
let result = language.toUpperCase();

console.log(language); // Output: javascript
console.log(result);   // Output: JAVASCRIPT