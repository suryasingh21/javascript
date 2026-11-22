// ==========================================
// 1. STRING
// ==========================================

// String is used to store text.
// Anything written inside quotes is treated as text.

let name = "Surya";
let city = "Bengaluru";

console.log(name); // Output: Surya
console.log(city); // Output: Bengaluru


// ==========================================
// 2. NUMBER
// ==========================================

// Number is used to store numerical values.
// It can be whole numbers or decimal numbers.

let age = 20;
let price = 99.50;

console.log(age);   // Output: 20
console.log(price); // Output: 99.5

console.log(age + 5); // Output: 25 (addition)


// ==========================================
// 3. BOOLEAN
// ==========================================

// Boolean stores only two values: true or false.
// It is used for conditions and decision-making.

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);  // Output: true
console.log(isLoggedIn); // Output: false

// Comparison also returns a Boolean value.
console.log(10 > 5); // Output: true


// ==========================================
// 4. UNDEFINED
// ==========================================

// Undefined means a variable is declared
// but no value has been assigned to it yet.

let marks;

console.log(marks); // Output: undefined


// ==========================================
// 5. NULL
// ==========================================

// Null means intentionally empty.
// We assign null when we want to show
// that a variable currently has no value.

let selectedCar = null;

console.log(selectedCar); // Output: null


// ==========================================
// 6. BIGINT
// ==========================================

// BigInt is used to store very large whole numbers.
// Add 'n' at the end to create a BigInt.

let bigNumber = 123456789012345678n;

console.log(bigNumber); // Output: 123456789012345678n


// ==========================================
// 7. SYMBOL
// ==========================================

// Symbol creates a unique value.
// Even two symbols with the same description
// are different from each other.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // Output: false


// ==========================================
// 8. OBJECT
// ==========================================

// Object stores multiple related values
// in key-value pairs.

let student = {
    name: "Surya",
    age: 20,
    branch: "CSE"
};

// Accessing object values using dot notation
console.log(student.name);   // Output: Surya
console.log(student.age);    // Output: 20
console.log(student.branch); // Output: CSE


// ==========================================
// 9. ARRAY
// ==========================================

// Array stores multiple values inside one variable.
// Index starts from 0, not 1.

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Mango
console.log(fruits[2]); // Output: Banana

console.log(fruits.length); // Output: 3 (total elements)


// ==========================================
// 10. FUNCTION
// ==========================================

// Function is a reusable block of code.
// It executes when we call it using parentheses.

function greet() {
    console.log("Hello Surya");
}

greet(); // Output: Hello Surya


// ==========================================
// CHECKING DATA TYPES USING TYPEOF
// ==========================================

// typeof is used to check the data type
// of a particular value or variable.

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent); // boolean
console.log(typeof marks);    // undefined
console.log(typeof fruits);   // object (arrays are objects)
console.log(typeof student);   // object