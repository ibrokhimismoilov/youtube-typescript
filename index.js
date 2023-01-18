"use strict";
// Massivlar, kortejlar va qayta hisoblash
// let a = [];
// a = [12, true, "str", []]
// let a = [1, 2, 4]
let a = [];
a = [1];
// a = [1, 2, true]
let b = ["text", "str", ""];
let c = [1, 2, 3];
let d = ["", 12, ""];
let e = [1, 2, 3, ""];
// ===================================================
// kortejlar
let f = [1, "asd"];
// f = [true]
// f = [""]
f = [1, "str"];
let g;
g = [12, "str", true];
// let h: [number, string?, boolean]
// ===================================================
// Qayta hisoblash [Enums]
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 10] = "Male";
    Gender[Gender["Female"] = 11] = "Female";
})(Gender || (Gender = {}));
// console.log(Gender.Male, Gender.Female);
// console.log("Male=" + Gender[Gender.Male], "Female" + Gender[Gender.Female]);
var G;
(function (G) {
    G["A"] = "Hello";
    G["B"] = "TypeScript";
})(G || (G = {}));
console.log("Hello" /* H.A */, "TypeScript" /* H.B */);
//# sourceMappingURL=index.js.map