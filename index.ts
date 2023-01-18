// Massivlar, kortejlar va qayta hisoblash

// let a = [];
// a = [12, true, "str", []]
// let a = [1, 2, 4]
let a: number[] = [];
a = [1];
// a = [1, 2, true]

let b: string[] = ["text", "str", ""];

let c: Array<number> = [1, 2, 3];

let d: (number | string)[] = ["", 12, ""];

let e: Array<number | string> = [1, 2, 3, ""];

// ===================================================
// kortejlar

let f: [number, string] = [1, "asd"];
// f = [true]
// f = [""]
f = [1, "str"];

let g: [number, string?, boolean?];

g = [12, "str", true];

// let h: [number, string?, boolean]

// ===================================================
// Qayta hisoblash [Enums]

enum Gender {
  Male = 10,
  Female,
}

// console.log(Gender.Male, Gender.Female);
// console.log("Male=" + Gender[Gender.Male], "Female" + Gender[Gender.Female]);

enum G {
  A = "Hello",
  B = "TypeScript",
}

// console.log(G.A, G.B, G[G.A]);

const enum H {
  A = "Hello",
  B = "TypeScript",
}

console.log(H.A, H.B);
