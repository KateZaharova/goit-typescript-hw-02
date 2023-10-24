/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = {
  sex: string | string;
  head: number;
  leg: number;
  hand: number;
};

let myGender: Gender = {
  sex: "male",
  head: 1,
  leg: 2,
  hand: 2,
};


export {};

//не впевнена, чи правильно я виконала завдання