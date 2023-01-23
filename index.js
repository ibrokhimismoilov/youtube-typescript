"use strict";
// TypeScript abstract classes.
// classes
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
    info() {
        return `
      Ism: ${this._name}
      Yosh: ${this._age}
      Kurs: ${this._course}
      Guruh: ${this._group}
    `;
    }
}
class Teacher extends Person {
    info() {
        return ``;
    }
}
// const ibrokhim: IPerson = new Person("Ibrokhim", 23);
// console.log(ibrokhim);
const sardor = new Student("Sardor", 24, "617-guruh", 4);
console.log(sardor);
console.log(sardor.info());
//# sourceMappingURL=index.js.map