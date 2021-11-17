
//1. ittirate numbers from 1 to num
//2. ittirate from 2 to i => number
//3. eсли остаток от деления i на number равно 0 - то не простое

//
function getPrimes(num) {
 let newArr = [...];
 for (let i = 1; i <= num; i++) {
  if (i % 3 !== 0 && i % 2 !== 0 && i > 1) {
  //  newArr.push(i);
    newArr[...] = i;
  }
 }
 console.log(newArr) ;
}
// console.log(getPrimes(20));

// const getPrimes = (num) => {

//  let newArr = [...];
//  for (let i in newArr) {
//   if (i % 3 !== 0 && i % 2 !== 0 && i > 1) {
//   //  newArr.push(i);
//     newArr[...] = i;
//   }
//  }
//  return newArr;
// }
// console.log(getPrimes(20));

let name = 'Mamur';