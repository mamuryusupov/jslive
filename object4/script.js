// obj
// arr
// algo
// 1. get keys & values ++
// 2. get id to every value (map) ++
// 3. sort

// const getCustomersList = (obj) => {
//  // put your code here
//  const keys = Object.keys(obj);
//  return Object.values(obj)
//   .map((el, index) => ({ ...el, id: keys[index] }))
//   .sort((a, b) => a.age - b.age);
// };

const getCustomersList = (obj) => {
 return Object.entries(obj)
  .map(([id, customer]) => ({ ...customer, id }))
  .sort((a, b) => a.age - b.age);
};

// destructuring

const arr = [10, 22, 11];
const [el1, el2] = arr;
console.log(el1, el2);

const obj = {
 name: 'James',
 age: 111,
};
const { age, name, city } = obj;
console.log(age);
console.log(name);
console.log(city);

// test data
const customers = {
 'customer-id-1': {
  name: 'William',
  age: 54,
 },
 'customer-id-2': {
  name: 'Tom',
  age: 17,
 },
};
console.log(getCustomersList(customers));
