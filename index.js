"use strict";
// Tiplarni o'zgartirish va birlashtrish,
// unknown type, union types, literal types, type aliases, required and optional properties, operator in
let a = 1;
let b = a;
let c = 2.1234;
let d = c;
let e = c;
// (<number>c).toFixed(2)
// (c as number).toFixed(2);
// (c as string).concat("asas");
//==================================
// Union types
let f = 2;
f = "asas";
f = true;
// f = {}
// Literal types
let size;
size = "s";
size = "m";
size = "l";
let f2;
f2 = 12;
f2 = "";
f2 = true;
let product = false;
product = "S";
product = "M";
product = "L";
// product = "XL"
let o;
o = { name: "" };
o = { age: 12 };
o = { name: "", age: 12 };
let o2;
let o3;
o2 = { name: "", age: 12 };
o3 = { name: "", age: 23 };
let person = { firstname: "Ibrokhim" };
// person = { firstname: "Ismoil", age: 12 };
if ("age" in person) {
    console.log("Age property mavjud");
}
else {
    console.log("Age property mavjud emas");
}
//# sourceMappingURL=index.js.map