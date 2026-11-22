// =======================================================
//                 JAVASCRIPT VARIABLES
// =======================================================

// A variable is a container used to store data.
// For example: name, age, city, marks, etc.


// =======================================================
// 1. VAR VARIABLE
// =======================================================

// 'var' is used to create (declare) a variable.
// Here, we are creating a variable named 'name'.
// The value "Surya" is stored inside the variable.

var name = "Surya";

// console.log() is used to display the value in the console.
console.log(name); // Output: Surya


// -------------------------------------------------------
// REASSIGNING A VAR VARIABLE
// -------------------------------------------------------

// Reassigning means changing the old value of a variable
// and storing a new value inside the same variable.

// Here, the old value "Surya" is replaced with "Rahul".

name = "Rahul";

console.log(name); // Output: Rahul


// -------------------------------------------------------
// REDECLARING A VAR VARIABLE
// -------------------------------------------------------

// Redeclaring means creating the same variable again
// using the same variable name.

// 'var' allows you to redeclare a variable.

var name = "Aman";

console.log(name); // Output: Aman


// =======================================================
// 2. LET VARIABLE
// =======================================================

// 'let' is also used to create a variable.
// Here, we are storing the age of a student.

let age = 20;

console.log(age); // Output: 20


// -------------------------------------------------------
// REASSIGNING A LET VARIABLE
// -------------------------------------------------------

// The value of a 'let' variable can be changed.
// Here, we are changing age from 20 to 21.

age = 21;

console.log(age); // Output: 21


// -------------------------------------------------------
// REDECLARING A LET VARIABLE
// -------------------------------------------------------

// You cannot declare another 'let' variable with the same
// name in the same scope.

// let age = 25; // ERROR: Cannot redeclare 'age'

// But you can change its value by reassignment:
// age = 25; // This is allowed.


// =======================================================
// 3. CONST VARIABLE
// =======================================================

// 'const' is used to declare a variable whose value
// cannot be reassigned later.

// Here, we are storing the name of a college.

const college = "RVITM";

console.log(college); // Output: RVITM


// -------------------------------------------------------
// REASSIGNING A CONST VARIABLE
// -------------------------------------------------------

// A 'const' variable cannot be reassigned.

// college = "RVC"; // ERROR: Assignment to constant variable

// The value "RVITM" cannot be replaced with "RVC".


// -------------------------------------------------------
// REDECLARING A CONST VARIABLE
// -------------------------------------------------------

// A 'const' variable cannot be declared again
// using the same name in the same scope.

// const college = "Other College"; // ERROR


// =======================================================
// 4. DIFFERENCE BETWEEN VAR, LET AND CONST
// =======================================================

// var:
// - Can be reassigned
// - Can be redeclared
// - Function-scoped

// let:
// - Can be reassigned
// - Cannot be redeclared in the same scope
// - Block-scoped

// const:
// - Cannot be reassigned
// - Cannot be redeclared in the same scope
// - Block-scoped
// - Must be given a value when declared


// =======================================================
// 5. WHAT IS SCOPE?
// =======================================================

// Scope means where a variable can be accessed or used.

// A block is created using curly braces { }.
// For example, an if statement, loop, or standalone block.

{
    // This is a block.

    let student = "Surya";
    const marks = 90;
    var city = "Bengaluru";

    // These variables can be accessed inside this block.

    console.log(student); // Output: Surya
    console.log(marks);  // Output: 90
    console.log(city);   // Output: Bengaluru
}


// -------------------------------------------------------
// ACCESSING VARIABLES OUTSIDE THE BLOCK
// -------------------------------------------------------

// let and const are block-scoped.
// They cannot be accessed outside the block where they were created.

// console.log(student); // ERROR: student is not defined
// console.log(marks);   // ERROR: marks is not defined

// var is NOT block-scoped.
// It can be accessed outside a normal block.

console.log(city); // Output: Bengaluru


// =======================================================
// 6. USING VARIABLES IN A REAL EXAMPLE
// =======================================================

// Here we are using variables to store student details.

const studentName = "Surya"; // Name will not be reassigned
let studentAge = 20;         // Age may change
let studentMarks = 85;        // Marks may change
const studentCollege = "RVITM"; // College name

// Displaying all student details.

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Marks:", studentMarks);
console.log("Student College:", studentCollege);


// -------------------------------------------------------
// UPDATING THE STUDENT'S INFORMATION
// -------------------------------------------------------

// The age can change, so we used let.

studentAge = 21;

// Marks can also change, so we used let.

studentMarks = 92;

// Printing the updated details.

console.log("Updated Age:", studentAge);
console.log("Updated Marks:", studentMarks);

// We used const for name and college because
// we don't intend to reassign those variables.


// =======================================================
// 7. BEST PRACTICE IN MODERN JAVASCRIPT
// =======================================================

// Use 'const' by default when you don't need reassignment.

const country = "India";

// Use 'let' when you need to change the value later.

let score = 100;

score = 150; // Allowed because score was declared using let.

// Avoid 'var' in modern JavaScript unless necessary.


// =======================================================
//                    END OF CODE
// =======================================================
