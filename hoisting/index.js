// const createLogger = () => {
//  const messages = [];
//  // str
//  // undef
//  const warn = (message) => {
//   message.push({
//    message,
//    dateTime: new Date(),
//    type: 'warn',
//   });
//  };

//  const error = (message) => {
//   messages.push({
//    message,
//    dateTime: new Date(),
//    type: 'error',
//   });
//  };

//  const log = (message) => {
//   messages.push({
//    message,
//    dateTime: new Date(),
//    type: 'log',
//   });
//  };
//  // input : string
//  // output: arrays of objects
//  const getRecords = (str) => {
//   let filtered = str ? messages.filter((elem) => elem.type === str) : messages;
//   return filtered.sort((a, b) => b.dateTime - a.dateTime);
//  };

//  return { warn, log, error, getRecords };
// };

// // test data

// const logger = createLogger();
// logger.log('User logged in');
// logger.warn('User try to restricted page');
// logger.error('Unexpected error on the site');
// logger.log('User logged out');
// console.log(logger.getRecords());
// console.log(logger.getRecords('warn'));

// // console.log(logger.getRecords('error'));
// // console.log(logger.getRecords('warn'));
// // console.log(logger.getRecords('warnc'));
// // console.log(logger.getRecords('log'));
// // console.log(logger.getRecords('log'));

// // setTimeout(() => {
// //  logger.log('User logged out');
// //  console.log(logger.getRecords());
// //  console.log(logger.getRecords('warn'));
// // }, 2000);

// function makeCounter() {
//  let count = 0;
//  return () => {
//   console.log(count);
//   return count++;
//  };
// }

// // test data
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// hoisting var example 1

console.log(message);
var message = 'Hoisting is here!';

// hoisting var example 2
var a = 55;
console.log(a);

if (a) {
 var a = 1;

 console.log(a);
}

console.log(a);

// example 3
var a = 77;
console.log(a);

function print() {
 var a = 2;
 console.log(a);
}
print();

console.log(a);

// func expression adn declaration 4

run();

function run() {
 console.log('RUN');
}

// stop();
// const stop = function () {
//  console.log('STOP');
// };
