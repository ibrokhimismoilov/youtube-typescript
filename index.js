"use strict";
// TypeScript interface.
// type IPerson = {
//   _name: string;
//   _age: number; // _age?: number;
//   seyHello(): string; // seyHello: () => string;
// };
// ============================================
// interface IPerson {
//   _name: string;
//   _age: number;
// }
// interface IPerson {
//   seyHello(): string;
// }
// type IPerson = {
//   _name: string;
//   _age: number; // _age?: number;
// };
// type IPerson = {
//   seyHello(): string; // seyHello: () => string;
// };
// ============================================
// interface IPersonProps {
//   _name: string;
// }
// interface IPersonProps2 {
//   _age: number;
// }
// interface IPerson extends IPersonProps, IPersonProps2 {
//   seyHello(): string;
// }
// type IPersonProps = {
//   _name: string;
// };
// type IPersonProps2 = {
//   _age: number; // _age?: number;
// };
// type IPerson = IPersonProps &
//   IPersonProps2 & {
//     seyHello(): string; // seyHello: () => string;
//   };
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return `Assalomu alaykum. Mening ismim ${this._name}!`;
    }
}
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    seyHello() {
        const parentMethod = super.seyHello();
        return `${parentMethod} Men ${this._course}-kursning, ${this._group}da o'qiyman.`;
    }
}
const ibrokhim = new Person("Ibrokhim", 23);
console.log(ibrokhim);
console.log(ibrokhim.seyHello());
const sardor = new Student("Sardor", 24, "617-guruh", 4);
console.log(sardor);
console.log(sardor.seyHello());
//# sourceMappingURL=index.js.map