"use strict";
// TypeScript [public, private, protected, (readonly)].
const PI = 3.14;
class Person {
    constructor(name, age) {
        this._name = "";
        // public _name: string = "";
        // private _name: string = "";
        // protected _name: string = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    // constructor(public name: string, private age: number) {}
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
    info() {
        return `
      Ism: ${this._name}
      Yosh: ${this._age}
      Kurs: ${this._course}
      Guruh: ${this._group}
    `;
    }
}
const ibrokhim = new Person("Ibrokhim", 23);
console.log(ibrokhim);
// ibrokhim._name = "Ismoil";
const sardor = new Student("Sardor", 24, "617-guruh", 4);
console.log(sardor);
// sardor.
// sardor.
//# sourceMappingURL=index.js.map