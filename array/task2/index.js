// const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
// для преобразования
// background:

// const mapRes = numberList.map((el) => {
//  const res = el * el;
//  return res;
// });

// func, index, arr
// el
// good
// const mapRes = numberList.map((el) => el * el);
// console.log(mapRes);

/* метод forEach */
// func, index, arr
// el

const numbersList = [5, 0, 8, 10, -4, 50, 220];

numbersList2.forEach((el) => {
 if (el > 100) {
  console.log(el);
 }
});

/* метод forEach */

/* метод find */

// callback
// func, index, arr
// bool

// bad
// numbersList3.find((el) => {
//  if (el % 2 === 1) {
//   return true;
//  }
//  return false;
// });
// console.log(findRes);
// good

// numbersList3.find((el) => el % 2 === 1);
// console.log(findRes);

// wrong
// console.log(numbersList3.filter((el) => el % 2 === 1)[0]);

// Reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// Reduce method
// func, acc init value, this (optional)
// num

// callback
// acc (number), el (number)
// acc (number)

// bad
// transactions.reduce((acc, el) => {
//  console.log('acc: ' + acc);
//  console.log('el: ' + el);
//  //  acc += el;
//  return acc + el;
// }, 100);

// good
const sum = transactions.reduce((acc, el) => acc + el);

console.log(sum);
