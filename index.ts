// Typescriptda tiplarni o'zgartirish va birlashtrish.
// unknown type, union types, literal types, type aliases, required and optional properties, operator in

// havfli usul
let a: any = 10;
let b: number = a;

// havfsiz usul
let c: unknown = 20.1234;
// let d: number = c;

let e: number = <number>c;
let f: number = c as number;

// (c as number).toFixed(2);
// (<number>c).toString();

// union type
let h: number | string | boolean = 10;
h = "tri";
h = true;

// literal types
let s: "sm" | "md" | "lg";

// s = "asdasd"
// s = 12;
// s = true
s = "sm";
s = "md";
s = "lg";

// type aliases

type Sizes = "SM" | "MD" | "LG" | boolean;

let s2: Sizes = "SM";

s2 = "MD";
s2 = "LG";

let s3: Sizes = false;

s3 = "MD";
s3 = "SM";
s3 = false;
// s3 = 123
// s3 = "XL";

type OBJ = { name: string } | { age: number };

let obj: OBJ;

obj = { name: "str" };
obj = { age: 23 };
obj = { name: "sdf", age: 23 };
// obj = {};

type OBJ2 = { name: string } & { age: number }; // {name: string, age: number}
let obj2: OBJ2;

obj2 = { name: "Ibrokhim", age: 23 };
// obj2 = {name: "asd"}
// obj2 = { age: 23 };

type OBJ3 = { name: string; age?: number };

let obj3: OBJ3 = { name: "Ibrokhim" };

// obj3 = { name: "Ibrokhim", age: 23 };
// obj3 = { name: "Ibrokhim", age: 23, weight: 34 };
// obj3 = { age: 23 };

if ("age" in obj3) {
  console.log("Mavjud");
} else {
  console.log("Mavjud emas");
}
