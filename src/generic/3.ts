/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
  function merge (objA, objB) {
  return Object.assign(objA, objB);
*/

function merge<T extends object, U extends object> (objA:T, objB:U):T & U {
  return Object.assign(objA, objB);
}

const merged = merge({email:"mail@mail.com"}, {phone:"111-222-333"});

merged.email;

export {}