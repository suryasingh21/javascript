// =====================================
// 1. STACK MEMORY
// =====================================

// Stack stores primitive values (simple data).
// Example: number, string, boolean.

let a = 10;
let b = a; // Copying the value of a into b

a = 50; // Changing a

console.log(a); // 50
console.log(b); // 10

// WHY?
// Because b has its own copy of the value.
// Changing a does not affect b.


// =====================================
// 2. HEAP MEMORY
// =====================================

// Heap stores objects and arrays.
// The variable stores a reference to the object.

let student1 = {
    name: "Surya",
    age: 20
};

// Copying the object reference.
// Both variables point to the SAME object.

let student2 = student1;

// Changing the name using student2
student2.name = "Rahul";

console.log(student1.name); // Rahul
console.log(student2.name); // Rahul

// WHY?
// Both variables refer to the same object.
// So changing one also affects the other.


// =====================================
// 3. SIMPLE DIFFERENCE
// =====================================

// STACK:
// Primitive values are copied independently.

// HEAP:
// Objects are stored separately.
// Variables hold references to those objects.