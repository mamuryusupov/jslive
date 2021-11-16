console.log('hello');

function getSenseOfLife() {
 //  return 42;
 console.log(42);
}

// const res = getSenseOfLife;
// console.log(res);

console.log(getSenseOfLife());

function getSquared(Number) {
 return Number * Number;
}
console.log(getSquared(2));
console.log(getSquared(999));
console.log(getSquared(-10));

// function printMessage(num) {
//  return "I'm" + ' ' + num;
// }
// console.log(printMessage(27));
//Function declaration
// function printMessage(num) {
//  return "I'm" + ' ' + num;
// }
// console.log(printMessage(27));

//input: num
//output: undefined

//function expression
const printMessage = function (num) {
 console.log("I'm" + ' ' + num);
};
function getMessage(num) {
 //
 console.log('I am ' + num + ' years old');
}

//test
const res = getMessage(50);
console.log(res);

// const mult = (num1, num2) => num1 * num2;

const mult = (num1, num2) => {
 return num1 * num2;
};

console.log(mult(2, 3));
console.log(mult(99, 3));

const getMagicNumber = () => 17;

//test data
console.log(getMagicNumber);
