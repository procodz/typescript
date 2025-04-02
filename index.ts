// type Person = {
//     name: string;

// };

// const person: Person = {
//     name: "John",
// };

// console.log(person.name); // John

//Annotation
// let myVariable: type = value;  
//type - string, number, boolean, any, void, null, undefined, never, object, array, tuple, enum, unknown

// let myVariable: number = 2;
// // myVariable = 10; // number
// let var1: number  = 10;
// myVariable += var1;
// console.log(myVariable); // Hello World


// let tech = "typescript";
// let version = 4.5;
// let isStable = true;
// console.log(tech, version, isStable); // typescript

//type inference - TypeScript can infer the type of a variable based on its value at the time of declaration.
// let myVariable = 2; // TypeScript infers the type as number
// // myVariable = "Hello World"; // Error: Type 'string' is not assignable to type 'number'
// console.log(myVariable); // Hello World
// console.log(typeof myVariable); // string

// let arr : number[] = [1, 2, 3, 4, 5]; // TypeScript infers the type as number[]
// console.log(arr); // [1, 2, 3, 4, 5]

// // arr.map((item) => {
// //     console.log(item*2);
// // }  ); // 1 2 3 4 5

// arr.filter((item) => {
//     return item > 2;
// }).map((item) => {
//     console.log(item*2);
// }  ); // 1 2 3 4 5

//Any - The any type is a special type in TypeScript that allows you to opt-out of type checking for a variable. It can hold any value, and TypeScript will not perform any type checking on it. This can be useful when you are working with dynamic data or when you don't know the type of a variable at compile time. However, using any can lead to runtime errors if you are not careful, as TypeScript will not catch type-related issues at compile time.

// let myVar : any = 20;
// myVar = "Hello World"; // No error, myVar can be any type
// myVar = true; // No error, myVar can be any type
// console.log(myVar); // Hello World

//function parameters annotations - TypeScript allows you to specify the types of function parameters. This helps ensure that the function is called with the correct types of arguments, and it also provides better documentation for the function's expected input.

// function add(a: number, b: number) : number{ // Function parameter annotations
//     return a + b;
// }

// console.log(add(2, 3)); // No error, both arguments are numbers

// const double = (x: number, y: number) : number => {   //arraow function's parameters will be provided any by default
//     return x * 2;

// }

// console.log(double(2, 3)); // No error, both arguments are numbers
// //if give less or more arguments then it will give error
// // console.log(double(2, 3, 4)); // Error: Expected 2 arguments, but got 3.

// function greet(person: string = "Raghvendra"){
//     return `Hello ${person}`;
// }

// const res = greet("John");
// console.log(res);

//return annotation - TypeScript allows you to specify the return type of a function. This helps ensure that the function returns the expected type, and it also provides better documentation for the function's expected output.
// function add(a: number, b: number): number { // Return type annotation
//for arrow function const func = (var: type):number => {}

// const double = (x: number): number => x*x;
// console.log(double(2)); // No error, the return type is number

//void - The void type is used to indicate that a function does not return a value. It is often used for functions that perform side effects, such as logging or modifying global state, rather than returning a value. When a function has a return type of void, it means that the function does not return anything, and you should not expect a value from it.

// function logMessage(message: string): void {
//     console.log(message); // No return value
// }

// logMessage("Hello, TypeScript!"); // No error, the function does not return a value

//Never - The never type is used to indicate that a function will never return a value. This can be useful for functions that always throw an error or for functions that have infinite loops. When a function has a return type of never, it means that the function will not complete normally and will not return a value. 
// Use-
//a function that always throws an error
//a func that has an infinite loop
// a variable that can never have a value

// function throwError(message: string): never {
//     throw new Error(message); // This function will never return a value

// }

// function infiniteLoop(): never {
//     while (true) {
//         // This function will never complete normally
//     }
// }
// let x: never;

// function neverFunc(): never {
//     while (true) {}

// }

// x = neverFunc(); // No error, x is of type never

//Array type - TypeScript provides several ways to define arrays, including using the Array type, the [] syntax, and the generic Array<T> type. You can also use tuples to define fixed-length arrays with specific types for each element.

let nums: number[] = [1, 2, 3, 4, 5]; // Array of numbers
console.log(nums); // [1, 2, 3, 4, 5]
