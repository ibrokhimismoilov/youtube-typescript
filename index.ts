// TypeScript - Arrays, tuples & Enums

// toplamlar
let a = [];
a = [12, "sdf", true, undefined, {}];

// let b = [1, 2, 3, 4];
// b = ["sdsdf"];
let b: number[] = [1, 2, 3];

b = [12, 34];
// b = ["sdf", true];
let c: Array<number> = [12];
c = [1, 2, 3, 4];

let d: (number | string | object | boolean)[] = [12, "asd", 232];

let e: Array<boolean | number> = [true, false, 12];
// e = [12, true, "sdf"]

// ============================================================
// tuples - kortejlar

let f: [number, string];

f = [12, "name"];
// f = ["asdasd", 12]
// f = [12];
// f = ["asdda"];
let g: [number, [number, string]];
g = [123, [12, "asdasd"]];

// ============================================================
// Qayta hisoblash - Enums

// {
//   "": 123123
// }

// number | symbol | string
enum Gender {
  Male,
  Female,
}

// console.log(Gender.Male, Gender.Female);
// console.log(Gender[1], Gender[Gender.Female]);

// enum G {
//   A = 10,
//   A2,
//   B,
//   C,
// }

// console.log(G.A, G.A2, G.B, G.C);

enum H {
  A = "Hello",
  B = "Typescript",
}

console.log(H.A, H.B);

const enum I {
  A = 10,
  B = "salom",
}

console.log(I.A, I.B);
