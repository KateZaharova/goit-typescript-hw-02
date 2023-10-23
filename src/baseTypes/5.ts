/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;

union = "string";
union = 15;

type Literal = "enable" | "disable";
let lit: Literal;
lit = "enable";
lit = "disable";
