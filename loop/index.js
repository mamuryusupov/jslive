// input: number
// output: undefined

//1. ittirate numbers from 1 to num
//2. ittirate from 2 to i => number
//3. eсли остаток от деления i на number равно 0 - то не простое

// function getPrimes(num) {
//  let newArr = [...];
//  for (let i = 1; i <= num; i++) {
//   if (i % 3 !== 0 && i % 2 !== 0 && i > 1) {
//   //  newArr.push(i);
//     newArr[...] = i;
//   }
//  }
//  console.log(newArr) ;
// }
// console.log(getPrimes(20));

// function getPrime(num) {
//  for (let i = 2; i <= num; i += 1) {
//   //console.log('Checking number # ' + i);
//   let isPrime = true;
//   for (let number = 2; number < i; number += 1) {
//    //console.log('Inner number ' + number);
//    if (i % number === 0) {
//    // console.log('Number ' + i + 'Is not Prime');
//     isPrime = false;
//     break;
//    }
//   }
//   if (isPrime) {
//    console.log(i);
//   }
//  }
// }

// console.log(getPrime(15));
// console.log(getPrime(200));

function isPrime(number) {
 for (let index = 2; index < number; index += 1) {
  //console.log('Inner number ' + number);
  if (number % index === 0) {
   return false;
   // console.log('Number ' + i + 'Is not Prime');
  }
 }
 return true;
}

function getPrime(num) {
 for (let i = 2; i <= num; i += 1) {
  if (isPrime(i)) {
   console.log(i);
  }
 }
}

console.log(getPrime(15));
console.log(getPrime(200));
