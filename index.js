"use strict";
// TypeScript => functions, signature functions, function overloads
// function pow(x, y) {
//   return x ** y;
// }
function pow(x, y) {
    return `${x} ** ${y} = ${x ** y}`;
}
// console.log(pow(2, 3));
// const add = (x, y) => x + y;
const add = (x, y) => x + y;
function log(x) {
    console.log(x);
}
function someFunc(s) {
    throw new Error(s);
}
// signature functions
let c;
// c = function (a: number, b: number): number {
//   return a + b;
// };
c = function (a, b) {
    return `${b}: ${a}`;
};
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc("Javob", 17));
//# sourceMappingURL=index.js.map