/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message:string):void {
  console.log(message);
}
showMessage("message");


function calc(num1: number, num2: number):number {
  return num1 + num2;
}
calc(1, 2);


function customError(message:string):never {
  throw new Error(message);
}
customError ('Error');

export {};