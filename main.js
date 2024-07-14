// <<<=============== Welcome to Day 2 of TypeScript exam's preparation ===============>>>
// <<<<<<<============ Operators in TypeScript ==============>>>>>>>>>
// Arithmatic Operators...
// Addition...
// let a: number = 33;
// let b: number = 22;
// let totalSum: number = a + b;
// console.log(`\nAddition: ${totalSum}\n`);   // Used tamplate literal   (`${}`)  this is called.
// // Substaction...
// let c: number = 45634;
// let d: number = 35345;
// let totalSub: number = c - d;
// console.log(`\nSubtraction: ${totalSub}\n`);
// // Multiplication... 
// let e: number = 35;
// let f: number = 6;
// let totalMul: number = e * f;
// console.log(`\nMultiplication: ${totalMul}\n`);
// // Division...
// let g: number = 650;
// let h: number = 5;
// let totalDiv: number = g / h;
// console.log(`\nDivision: ${totalDiv}\n`);
// // Modulus/ Remainder...
// let i: number = 77;
// let j: number = 3;
// let totalMod: number = i % j;
// console.log(`\nModulus: ${totalMod}\n`);
// // Exponention...
// let k: number = 55;
// let l: number = 3;
// let totalExp: number = k ** l; 
// console.log(`\nExponention: ${totalExp}\n`);
// <<<<<<========== Unary Operators ==========>>>>>>
// let num1: number = 15;
// let num2: number = 9;
// num1++;
// // ++num1;
// num2--;
// // --num2;
// // console.log(`${num1}, ${num2}`)
// console.log(num1, num2);
// // Revised Unary Operators..
// let num3: number = 50;
// let num4: number = 50;
// let num5: number; num5 = ++num3 + num3++ + num4-- + --num4 + num3 + num4++ + num3;
// console.log(`\n${num5}`);   // Thus the output is 352.
// Combining Operator...
// let num6: number = 14 + 4 * 3;
// let result = num6++;
// console.log(result); // The output is 26 bcoz mathematically it will perfrom multiplication method first and than addition
// Assigning Operator...
// let a: number = 33
// a += 5
// console.log(a); // The output is 38 bcoz the value of a is 33 and in the line below 33+=5 = 38.
// Comperision Operator...
// let b: number = 55;
// let c: number = 33;
// let d = b > c; // true
// let e = c < b; // true
// let f = c == b; // false
// let g = b != c; // true
// let h = b === c; // false
// console.log(d, e, f, g, h);
// Logical Operators...
let a = 45;
let b = 35;
let logicalAnd = a > b && a < b;
let logicalOr = a < b || a === b;
let logicalNot = !(a == b);
console.log(logicalAnd, logicalOr, logicalNot);
export {};

