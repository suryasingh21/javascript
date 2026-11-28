// =====================================
// 1. CREATING DATE OBJECTS
// =====================================

// new Date() - Returns the current date and time.

let currentDate = new Date();

console.log(currentDate); // Output: Current date and time


// Creating a specific date.
// Format: Year, Month (0-11), Day

let myDate = new Date(2026, 10, 28);

console.log(myDate); // Output: Sat Nov 28 2026 ...

// IMPORTANT:
// Months start from 0 in JavaScript.
// 0 = January, 1 = February ... 10 = November, 11 = December.


// =====================================
// 2. TOP IMPORTANT DATE METHODS
// =====================================

let date = new Date(2026, 10, 28, 14, 30, 45);

// 1. getFullYear() - Gets the year.
console.log(date.getFullYear()); // Output: 2026

// 2. getMonth() - Gets the month (0-11).
console.log(date.getMonth()); // Output: 10 (November)

// 3. getDate() - Gets the day of the month (1-31).
console.log(date.getDate()); // Output: 28

// 4. getDay() - Gets the weekday (0-6).
// 0 = Sunday, 1 = Monday ... 6 = Saturday.
console.log(date.getDay()); // Output: 6 (Saturday)

// 5. getHours() - Gets the hour (0-23).
console.log(date.getHours()); // Output: 14

// 6. getMinutes() - Gets the minutes (0-59).
console.log(date.getMinutes()); // Output: 30

// 7. getSeconds() - Gets the seconds (0-59).
console.log(date.getSeconds()); // Output: 45

// 8. getMilliseconds() - Gets milliseconds (0-999).
console.log(date.getMilliseconds()); // Output: 0


// =====================================
// 3. SET DATE METHODS
// =====================================

let today = new Date(2026, 10, 28);

// 9. setFullYear() - Changes the year.
today.setFullYear(2027);
console.log(today.getFullYear()); // Output: 2027

// 10. setMonth() - Changes the month (0-11).
today.setMonth(0);
console.log(today.getMonth()); // Output: 0 (January)

// 11. setDate() - Changes the day of the month.
today.setDate(15);
console.log(today.getDate()); // Output: 15

// 12. setHours() - Changes the hour.
today.setHours(10);
console.log(today.getHours()); // Output: 10


// =====================================
// 4. DATE FORMATTING METHODS
// =====================================

let todayDate = new Date(2026, 10, 28, 14, 30);

// 13. toDateString() - Returns a readable date.
console.log(todayDate.toDateString());
// Output: "Sat Nov 28 2026"

// 14. toTimeString() - Returns readable time.
console.log(todayDate.toTimeString());
// Output: "14:30:00 GMT+0530 (India Standard Time)" 
// Exact timezone text depends on your system.

// 15. toISOString() - Returns date in ISO format (UTC).
console.log(todayDate.toISOString());
// Output: "2026-11-28T09:00:00.000Z" (assuming IST timezone)


// =====================================
// 5. GET CURRENT DATE AND TIME
// =====================================

let now = new Date();

console.log(now.getFullYear()); // Current year
console.log(now.getMonth() + 1); // Current month (1-12)
console.log(now.getDate()); // Current day
console.log(now.getHours()); // Current hour
console.log(now.getMinutes()); // Current minute


// =====================================
// 6. TIMESTAMP
// =====================================

// getTime() - Returns milliseconds since Jan 1, 1970.

let timestamp = new Date(2026, 10, 28).getTime();

console.log(timestamp); // Output: 1795824000000 (IST timezone)

// Date.now() - Returns the current timestamp.

console.log(Date.now()); // Output: Current timestamp in milliseconds


// =====================================
// 7. REAL-WORLD EXAMPLES
// =====================================

// Example 1: Display date in DD/MM/YYYY format.

let d = new Date(2026, 10, 28);

let formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

console.log(formattedDate); // Output: 28/11/2026


// Example 2: Display time in HH:MM format.

let time = new Date(2026, 10, 28, 14, 5);

let hours = String(time.getHours()).padStart(2, "0");
let minutes = String(time.getMinutes()).padStart(2, "0");

console.log(`${hours}:${minutes}`); // Output: 14:05


// Example 3: Calculate age.

let birthYear = 2005;
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age); // Output: 21 (in 2026; exact age needs birth month and day)


// Example 4: Compare two dates.

let date1 = new Date("2026-11-28");
let date2 = new Date("2026-12-01");

console.log(date1 < date2); // Output: true


// =====================================
// 8. IMPORTANT REVISION
// =====================================

// new Date()          = Current date and time
// getFullYear()       = Get year
// getMonth()          = Get month (0-11)
// getDate()           = Get day of month
// getDay()            = Get weekday (0-6)
// getHours()          = Get hours
// getMinutes()        = Get minutes
// getSeconds()        = Get seconds
// setFullYear()       = Change year
// setMonth()          = Change month
// setDate()           = Change day
// toDateString()      = Readable date
// toTimeString()      = Readable time
// toISOString()       = ISO date in UTC
// getTime()           = Timestamp in milliseconds
// Date.now()          = Current timestamp