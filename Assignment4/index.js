"use strict";
/*
    Name: 	Saad Zafar
    Roll No. PIAIC240519
    City: Lahore
    Batch: 57
    Quarter: 1
*/
//Problem 1
let greeting = console.log("Hello, World!");
//Problem 2
let num1 = 18;
let num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
//Problem 3
let a = 1;
let b = 7;
//Problem 4
let message = 'asad';
//Problem 5
console.log(num1 % num2);
//Problem 6
let counter = 0;
let counter1 = 0;
counter++;
++counter1;
console.log(counter);
console.log(counter1);
//Problem 7  
let c = true;
let d = false;
let e = true;
console.log(c || d || e); // OR Gate // true || falese || true = true
console.log(c && d && e); // AND Gate // true && false && true = false
console.log(!c, !d, !e); // OR Gate // !true = false // !false = true // !true = false
//Problem 8
let num = 10;
num += 7;
console.log(num);
num -= 4;
console.log(num);
num *= 2;
console.log(num);
num /= 5;
console.log(num);
//Problem 9
let number = 6; // Declaring a variable number and assigning it a value 6
if (number % 2 === 0) { // If the number is divisible by 2 and the remainder is 0 then it is even
    console.log(`${number} is Even`);
}
else { // If the number is not divisible by 2 and the remainder is not 0 then it is odd
    console.log(`$ {number} is Odd`);
}
//Problem 10    
let personAge = 18; // declaring variable personAge and assigning it a value 18
if (personAge >= 18) { //  If the age is greater than or equal to 18 then the person is eligible to vote
    console.log("Eligible to vote");
}
else { // If the age is less than 18 then the person is not eligible to vote
    console.log("Not eligible to vote");
}
//Problem 11
let score = 80;
if (score >= 90) { // If the score is greater than or equal to 90 then the grade is A
    console.log("Grade is A");
}
else if (score >= 75) { // If the score is greater than or equal to 75 then the grade is B
    console.log("Gade is B");
}
else if (score >= 65) { // If the score is greater than or equal to 65 then the grade is C
    console.log("Grade  is C");
}
else if (score >= 55) { // If the score is greater than or equal to 55 then the grade is D
    console.log("Grade is D");
}
else if (score >= 33) { // If the score is greater than or equal to 33 then the grade is E
    console.log("Grade is E");
}
else { // If the score is less than 60 then the grade is F
    console.log("Grade is F");
}
//Problem 12
let x = 10, y = 20, z = 30; // Declaring three variables x, y, and z of type number and assigning them values 10, 20, and 30
// Finding maximum of three numbers
if (x > y && x > z) { // If x is greater than y and x is greater than z then x is the maximum
    console.log("Maximum: ", x);
}
else if (y > x && y > z) { // If y is greater than x and y is greater than z then y is the maximum
    console.log("Maximum: ", y);
}
else { // If z is greater than x and z is greater than y then z is the maximum
    console.log("Maximum: ", z);
}
//Problem 13
let year = 2020; // Declaring a variable year of type number and assigning it a value 2020
if (year % 4 === 0) { // If the year is divisible by 4 and the remainder is 0 then it is a leap year
    console.log(`${year} is a Leap Year`);
}
else { // If the year is not divisible by 4 and the remainder is not 0 then it is not a leap year
    console.log(`${year} is not a Leap Year`);
}
//Problem 14
let fahrenheit = 88.7;
// Convert temperature from Fahrenheit to Celsius
let celcuis = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit} Farenheit = ${celcuis} Celcuis`);
//Problem 15
let n = 10;
if (n > 0) { // If Number is greater than positive
    console.log(`${n} is greater than positive`);
}
else if (n < 0) { //If Number is less than negative
    console.log(`${n} is less than negative`);
}
else { // if Number is zero
    console.log(`${n} is zero`);
}
//Problem 16
let num7 = 10; // Declaring a variable num7 of type number and assigning them values 10
console.log(`The Table of ${num7} upto 10 is`);
for (let i = 0; i <= 10; i++) { //Writing a for loop that will start from 0 and runs until the value of i is 11.
    console.log(`${i} * ${num} = ${num * i}`);
}
