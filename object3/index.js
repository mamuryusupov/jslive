'use strict';

// 1) create obj +++
// 2) ittirate arr
// 3) put key and value
// 4)

// bad
// function buildObject(keysList, valuesList) {
//  // put you code here
//  const newObj = {};
//  for (let index = 0; index < keysList.length; index += 1) {
//   newObj[keysList[index]] = valuesList[index];

//   //  { ...newObj, keyList[index] : valuesList[index] };
//  }
//  return newObj;
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

// good

// function buildObject(keysList, valuesList) {
//  return keysList.reduce(
//   (acc, key, index) => ({ ...acc, [key]: valuesList[index] }),
//   {}
//  );
// }

// const keys = ['population', 'country', 'language'];
// const values = [300000000, 'Uganda', 'Africaas'];
// console.log(buildObject(keys, values));

//Task 2
