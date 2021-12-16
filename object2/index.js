// obj obj
// boolean
// 0. compare length of objects, if not equal => false
// 1. loop obj 1 key
// 2. compare value1!=value2 => false

function compareObjects(obj1, obj2) {
 // put your code here
 const objLength1 = Object.keys(obj1);
 const objLength2 = Object.keys(obj2);
 if (objLength1.length !== objLength2.length) {
  return false;
 }
 for (let i in obj1) {
  if (obj1[i] !== obj2[i]) {
   return false;
  }
 }
 return true;
}

// examples
const obj1 = {
 name: 'Tom',
 age: 17,
};

const obj2 = {
 name: 'Bob',
 age: 17,
};

const obj3 = {
 name: 'Bob',
 age: 17,
 student: false,
};

const obj4 = {
 name: 'Tom',
 age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
