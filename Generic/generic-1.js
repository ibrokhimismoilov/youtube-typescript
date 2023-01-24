"use strict";
// TypeScript generic type
let arr = [1, 2, 3];
let arr2 = ["asd", "dfsd"];
const arr3 = [true, false, 12];
// function echo<T>(x: T): T {
//   return x;
// }
// const result = echo(12)
// const result = echo("Salom");
// const result: string = echo("salom");
const echo = (x) => {
    return x;
};
const echo2 = (x) => {
    return x;
};
const echo3 = (x) => x;
const result = echo3("TS");
//# sourceMappingURL=generic-1.js.map