"use strict";
// TypeScript - Arrays, tuples & Enums
// toplamlar
let a = [];
a = [12, "sdf", true, undefined, {}];
// let b = [1, 2, 3, 4];
// b = ["sdsdf"];
let b = [1, 2, 3];
b = [12, 34];
// b = ["sdf", true];
let c = [12];
c = [1, 2, 3, 4];
let d = [12, "asd", 232];
let e = [true, false, 12];
// e = [12, true, "sdf"]
// ============================================================
// tuples - kortejlar
let f;
f = [12, "name"];
// f = ["asdasd", 12]
// f = [12];
// f = ["asdda"];
let g;
g = [123, [12, "asdasd"]];
// ============================================================
// Qayta hisoblash - Enums
// {
//   "": 123123
// }
// number | symbol | string
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// console.log(Gender.Male, Gender.Female);
// console.log(Gender[1], Gender[Gender.Female]);
// enum G {
//   A = 10,
//   A2,
//   B,
//   C,
// }
// console.log(G.A, G.A2, G.B, G.C);
var H;
(function (H) {
    H["A"] = "Hello";
    H["B"] = "Typescript";
})(H || (H = {}));
console.log(H.A, H.B);
console.log(10 /* I.A */, "salom" /* I.B */);
//# sourceMappingURL=index.js.map