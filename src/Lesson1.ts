// Typescript includes all types that we are famillar, and can infer the type by looking at the value
let num = 1;
let str = "Hello";
let bool = true;
let bigInt = 3n;
let sym = Symbol("Hello");

// When you want to be explicit with what type something is, you can set it
let und: undefined;
let n: null;

// Typescript is giving us errors, because we are assigning values that are different types then expected

// num = "hello";
// str = 1;
// bool = 3n;
// und = true;
// n = Symbol(3);
// bigInt = undefined;
// sym = null;

// Typescript includes some additional types that are cool to use

// Tuples allow sot create an array with a fixed number of elements whose types are known
let students: [string, string];
students = ["DaJuan", "Zack"];
console.log(students);

// If we try to add more than specified or change a value to a different type, we can't

// students[0] = 3;
// students[2] = "Miguel";

// Enums allow us to give names to sets of numeric values

enum Major {
  ElectricalEngineering,
  CivilEngineering,
  ComputerScience = "Computer Science",
  ComputerEngineering = "Computer Engineering"
}

console.log(`My name is DaJuan and I study ${Major.ElectricalEngineering}`);
