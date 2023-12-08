//Exercise 1.3
alert("Hi there!");
console.log("Hello! How are you?");
prompt("Hi! What is your name");

//Exercise 1.4

let m = 10;
console.log(m);
/*This will show the output
of a value which is equal to 10 in console*/

// Chapter 2
// Exercise 2.1
let str1 = 'Laurence';
console.log("str1", typeof str1);

let str2 = "Svekis";
console.log("str2", typeof str2);

let val1 = undefined;
console.log("val1", typeof val1);

let val2 = null;
console.log("val2", typeof val2);

let myNum = 1000;
console.log("myNum", typeof myNum);

// Exercise 2.2

let name = 'Mahnoor';
let age = 21;
let iCanCode=true;

console.log("Hello, My name is " + name + ", I am " + age + " years old and I can code Javascript: " +iCanCode);

// Exercise 2.3
// const a = parseInt(prompt('Enter the first number ')); 
// const b = parseInt(prompt('Enter the second number '));

// const c = (a**2) + (b**2);
// console.log(c);

// Exercise no 2.4
let a = parseInt(prompt('Enter the first number ')); 
let b = parseInt(prompt('Enter the second number '));
let c =  parseInt(prompt('Enter the third number '));

b += a;
console.log(b);

a /= c;
console.log(a);

c = c % b;
console.log(`${c} % ${b} = ${c}`);

// Chapter Project
// Miles-To-Kilometers Conversion

let miles = parseInt(prompt('Enter number'));
let km = 1.60934 * miles; 

console.log(`The distance of ${km} kms equal to ${miles} miles`);

// BMI Calculator
let height =  parseInt(prompt('Enter Your height in inches'));
let h_In_Cm = height * 2.54; 
console.log(h_In_Cm);

let weight =  parseInt(prompt('Enter your weight in pounds'));
let w_In_kg =  weight * 0.45359237;
console.log(w_In_kg);

let BMI = w_In_kg/(h_In_Cm**2);

console.log(`BMI is = ${BMI}`);





