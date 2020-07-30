// Generics give us the ability to abstract types for resuable blocks of code

// Here is a scenario, where we have a function, that we want to work with any value. We could use the any type
// function genericTest(arg: any): any {
//   return arg
// }

// any is generic enough to cause the function to accpet any and all types
// However, with the use of any, we are loosing out on data about the argument

// console.log(genericTest(3));
// console.log(genericTest("Hello World"));

// T is a type variable that can represent any type
function genericTest<T>(arg: T): T {
  return arg;
}

console.log(genericTest<string>("Hello World"));
console.log(genericTest<number>(3));

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc1: Resource<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk"]
};

console.log(doc1);

const doc2: Resource<{ name: string; major: string }> = {
  uid: 1,
  resourceName: "student",
  data: { name: "DaJuan", major: "Computer Science" }
};

console.log(doc2);
