/* eslint-disable */

// global lex env
// {
// environmentRecord: {
// message: 'test',
// weight: 55,
// run : {
//console.log('RUN');
// },
//   createMessenger: {....}
//   messanger: null
// ...
//},
//   outerLexEnv:...
// }

// createMessenger1 LEX ENV
// {
//   envornmentRecord: {
//     message: hello
//       sender:...
//     sendMEssage:...
//   }
// outerLexEnv: global
// }

// createMessenger2 LEX ENV
// {
//   envornmentRecord: {
//     message: justlearn it
//       sender:...
//     sendMEssage:...
//   }
// outerLexEnv: global
// }

// setMessage LEX ENV
// {
//   envornmentRecord: {
//     text: hello
//   }
// outerLexEnv: createMessenger1
// }
// printer LEX ENV
// {
//   envornmentRecord: {
//
//   }
// outerLexEnv: createMessenger1
// }

const message = 'Test';
const weight = 55;

function run() {
 console.log('RUN');
}
// in: none
// out: obj

function createMessenger() {
 let message = 'Just learn it';
 let sender = 'Gromcode';

 // При открытии фигурных скобок создается лексическаое окружение например if else и циклы;
 // Лексическое окружение не создается для объекта

 // for(let index = 0: index < 10; index += 1) {
 //   const weight = 100;
 //   console.log
 // }

 // in: string
 // out: undefined

 function sendMessage(name) {
  console.log(`${name}, ${message}! Your ${sender}`);
 }

 function setSender(newSender) {
  sender = newSender;
 }

 function setMessage(text) {
  message = text;
 }
 function printer() {
  console.log(weight);
 }

 return {
  sendMessage,
  setMessage,
  setSender,
  printer,
 };
}

const messanger1 = createMessenger();
messanger1.setMessage('Hello');
messanger1.printer();
const messanger2 = createMessenger();

run();
