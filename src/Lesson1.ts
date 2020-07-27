// Parameter Types, Optional Types, Return Types

// Functions in typescript can be created the same way they are created in Javascript. For these examples, I will rely on Arrow functions unless otherwhise needed

// Parameters in Functions should be explicitly set, or they will default to any

const calculator = (a: number, b: number, operator: string) => {
  switch (operator.toUpperCase()) {
    case "ADDITION":
      console.log(a + b);
      break;
    case "SUBTRACION":
      console.log(a - b);
      break;
    case "DIVISION":
      console.log(a / b);
      break;
    case "MULTIPLICATION":
      console.log(a * b);
      break;
    default:
      console.log(`I don't know what to do with ${operator}`);
  }
};

calculator(25, 7, "multiplication");

// If you want a parameter to be optional, you can create one. However, optional parameters must be declared after required parameters
// This is simmlar tp default parameters, which you could also do in typescript

const sayHello = (name?: string) => {
  if (typeof name !== "string") {
    console.log("Hello there");
  } else {
    console.log(`Hello ${name}!`);
  }
};

sayHello();
sayHello("DaJuan");

// So far we've been loging to the console, and all our functions have been of return type void.
// Return types can be infered, but they can also be explicit

const square = (num: number) => {
  return num ** 2;
};

console.log(square(4));

const getLength = (str: string): number => {
  return str.length;
};

console.log(getLength("pneumonoultramicroscopicsilicovolcanoconiosis"));

// Function Signatures allo us to create discriptions of a function

let getFactorial: (x: number) => number;

getFactorial = (base: number): number => {
  if (base === 0) return 1;
  return base * getFactorial(base - 1);
};

console.log(getFactorial(5));
