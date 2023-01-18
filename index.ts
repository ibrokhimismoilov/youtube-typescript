// Tiplarni o'zgartirish va birlashtrish,
// unknown type, union types, literal types, type aliases, required and optional properties, operator in

let a: any = 1;
let b: number = a;
let c: unknown = 2.1234;

let d: number = <number>c;
let e: number = c as number;

// (<number>c).toFixed(2)
// (c as number).toFixed(2);

// (c as string).concat("asas");

//==================================

// Union types
let f: number | string | boolean = 2;
f = "asas";
f = true;
// f = {}

// Literal types
let size: "s" | "m" | "l";
size = "s";
size = "m";
size = "l";
// size = "xl";

// let f2: number | string | boolean = 2;

// Type aliases
type TYPE = number | string | boolean;

let f2: TYPE;
f2 = 12;
f2 = "";
f2 = true;
// f2 = {}

type SIZE = "S" | "M" | "L" | boolean;

let product: SIZE = false;
product = "S";
product = "M";
product = "L";
// product = "XL"

let o: { name: string } | { age: number };
o = { name: "" };
o = { age: 12 };
o = { name: "", age: 12 };
// o = { name: 12, age: 12 };
// o = { name: 12, age: 12, lastName: "" };
// o = {}

// Tiplarni birlashirish

type O2 = { name: string } & { age: number };

let o2: O2;
let o3: O2;

o2 = { name: "", age: 12 };
o3 = { name: "", age: 23 };

//required & optional properties
type OBJ = { firstname: string; age?: number };

let person: OBJ = { firstname: "Ibrokhim" };

// person = { firstname: "Ismoil", age: 12 };

if ("age" in person) {
  console.log("Age property mavjud");
} else {
  console.log("Age property mavjud emas");
}
