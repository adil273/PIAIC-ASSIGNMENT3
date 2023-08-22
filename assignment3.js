"use strict";
//FIRST QUESTION
// Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value 
// at the specified index in the array. Return the modified array.
function oldarr(a, b, c) {
    a.splice(b, 0, c);
    return a;
}
var newarray = oldarr([1, 2, 3, 4, 5, 6], 2, 111);
console.log(newarray);
// SECOND QUESTION //
//Implement a simple shopping cart program using an array. 
//Create functions to add items, remove items, 
//and update quantities using the splice method. 
//Print the cart's contents after each operation
let Shopping = ["Vegetable", "Fruit", "Rice", "Oil", "Flour"];
console.log(Shopping);
// ADD CHICKEN AND MUTTON
function add() {
    Shopping.splice(2, 0, "Chicken", "Mutton");
    return Shopping;
}
//REMOVED VEGETABLES
function remove() {
    Shopping.splice(0, 1);
    return Shopping;
}
//UPDATED
function update() {
    Shopping.splice(0, 0, "Fish");
    return Shopping;
}
console.log(add());
console.log(remove());
console.log(update());
// Write a program that uses a while loop to print the first 25 integers.
let n = 0;
while (n <= 25) {
    console.log(n);
    n++;
}
//Write a program that uses a while loop to print the first 10 even numbers.
let m = 0;
while (m <= 10) {
    console.log(m);
    m += 2;
}
// Create a function that takes a positive integer as parameter and 
// uses a while loop to calculate and return the factorial of that number.
function facto(f) {
    while (f > 0) {
        factomultiply *= f;
        f--;
    }
    return factomultiply;
}
var factomultiply = 1;
console.log(facto(5));
/* Write a program having an array of numbers if the number is
negative it should remove the negative number from the array.*/
var neg = [1, 3, -5, 6, 8];
for (var i = 0; i < neg.length; i++) {
    if (neg[i] > 0) {
        console.log(neg[i]);
    }
}
var array = [-1, 2, -3, 4, -5, -6, -7, 8, -9, 10];
function NegNum(array) {
    for (let i = 0; i < array.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (array[i] < 0) {
                array.splice(i, 1);
            }
        }
    }
}
NegNum(array);
console.log("Removal of -ve", array);
/*Create a function that takes an array of numbers as parameter.
Use a while loop to calculate and return the
sum of all the numbers in the array.*/
function sum(a) {
    while (i < a.length) {
        j = j + a[i];
        i++;
    }
    console.log(j);
}
var i = 0;
var j = 0;
(sum([1, 2, 3, 4, 5]));
/* Implement a program that takes a list of temperatures in Celsius as input
from the user. Convert each temperature to Fahrenheit using the formula
F = (C * 9/5) + 32 and store the converted temperatures in an array.
Use a while loop to perform the conversion for each temperature*/
var temp = [36, 29, 35, 31, 38];
var t = 0;
var Tempconvert = [];
while (t < temp.length) {
    Tempconvert[t] = (temp[t] * 9 / 5) + 32;
    t++;
}
console.log(Tempconvert);
