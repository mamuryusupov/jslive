/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// // in: obj, str, str/num
// // out: obj
// // version 1
// function addPropertyV1(obj, key, value) {
//  obj[key] = value;
//  return obj;
// }

// version 2
// bad
// function addPropertyV1(obj, key, value) {
//  // input: target obj, source obj1.. source objN
//  // output: target obj

//  const sourceObj = { [key]: value };
//  Object.assign(obj, sourceObj);
//  return obj;
// }
// // testData

// let transaction = {
//  value: 170,
// };

// good
// function addPropertyV1(obj, key, value) {
//  return Object.assign(obj, { [key]: value });
// }
// testData

let transaction = {
 value: 170,
};

// version 3

// function addPropertyV1(obj, key, value) {
//  Object.assign({}, obj, { [key]: value });
//  return obj;
// }
// // testData

// // vitaliy
// function addPropertyV2(obj, key, value) {
//  const objNew = Object.assign({ [key]: value }, obj);
//  return objNew;
// }
// let transaction = {
//  value: 180,
// };

// version 4
// function addPropertyV4(obj, key, value) {
//  return { ...obj, [key]: value };
// }

// const addPropertyV4 = (obj, key, value) => ({ ...obj, [key]: value });

// console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// put your code here

// put your code here

// put your code here

// examples
console.log(...[1, 2, 3, 4]);
console.log([...[1, 2, 3, 4]]);
