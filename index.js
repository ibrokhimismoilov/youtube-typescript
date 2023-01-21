"use strict";
// TypeScript classes & inheritance.
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
class Teacher extends Person {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
    info() {
        const parent = super.seyHello();
        return `${parent} Men ${this.disciplines[0]} dan dars beraman`;
    }
}
const ibrokhim = new Person("Ibrokhim", 23);
console.log(ibrokhim);
console.log(ibrokhim.seyHello());
const sardor = new Student("Sardor", 24, "617-guruh", 4);
// sardor.
console.log(sardor);
console.log(sardor.seyHello());
// let a: unknown = 1;
// let b: number = <number>a
const newSardor = sardor;
// newSardor.
console.log(newSardor);
console.log(newSardor.seyHello());
const abror = new Teacher("Abror", 34, ["React", "JS"]);
console.log(abror);
console.log(abror.seyHello());
console.log(abror.info());
//# sourceMappingURL=index.js.map