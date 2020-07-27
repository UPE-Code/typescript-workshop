"use strict";
// Avanced Types - Arrays, Objects, Union Type, c
// Arrays can infer the type of the array if all elements are the same, and can throw errors if you try to add elements not of the same type
let numArr = [3, 2, 4, 1, 0];
console.log(numArr);
// numArr.push('3');
// If you want to be explicit, you can.
let fruits = [];
fruits.push('Grapes');
fruits.push('Apples');
fruits.push('Oranges');
console.log(fruits);
// variables assigned to be arrays, can not be assigned to anything else that is not an array of that type
// fruits = 'Grapes, Apples, Oranges';
// Properties and Methods of Objects can also be infered
let book = {
    title: 'Eloquent Javascript',
    author: 'Marjin Haverbeke',
    released: 2019,
    inLibrary: true,
    pagesRead: 68,
    readPages() {
        this.pagesRead += 1;
        console.log(`I've read ${this.pagesRead} page(s) of ${this.title} so far`);
    }
};
book.readPages();
// Imagine a scenario wehere we want a variable to have multiple types, how do we do that? With the Union Type
// Here we have an array, where the elements can be strings or numbers
let unionArr = [];
unionArr.push('1');
unionArr.push(1);
unionArr.push('2');
unionArr.push(2);
unionArr.push('3');
unionArr.push(3);
console.log(unionArr);
// Another type in Typescript is the any type, Where all types are accepted
let x = 3.569;
console.log(x);
x = 'Hello World';
console.log(x);
let isAlive = true;
console.log(isAlive);
// Type assertions allow us to cast one type to another, there are two ways to do type assertions
let someString = 'Hello World';
let someStringLength = someString.length;
console.log(someStringLength);
let anotherString = "I'm DaJuan";
let anotherStringLength = anotherString.length;
console.log(anotherStringLength);
// If we have a variable that could possibly be null, we can ignore the null value with the Non-null assertion operator
// let a: { foo: number } | null = null;
// a.foo; // Object is possibly null
// a!.foo;
