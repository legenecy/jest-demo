console.log('Hello from ts')

var myString;
myString='Hello Worlddd'

console.log(myString);

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

console.log(notSure);


//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

console.log(x[0].substring(1)); // OK
//console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'