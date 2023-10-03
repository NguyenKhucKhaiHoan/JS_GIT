// let myNumber = 123;
// const myNumberType = typeof myNumber;
// console.log(myNumberType); // "number"

// let newNumber = myNumber.toString();
// console.log(myNumberType);
// console.log(typeof(myNumber))
let myNumber = 1;

let myNumberType = typeof myNumber;

function getType(value) {
  return typeof value;
}

let myNumberTypeConstant = getType(myNumber);

myNumber = "Hello, world!";

console.log(typeof myNumberTypeConstant); // "string"

