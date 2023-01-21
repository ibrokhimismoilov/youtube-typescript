"use strict";
// TypeScriptda sinflar
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // 1ta klassda constructordan faqat 1 marotaba foydalaniladi
    // constructor () {}
    // method
    info(value) {
        return `${this._name} - ${this._age + value} yoshda`;
    }
    static description() {
        return `Bu klass Person haqida......`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 100) {
            this._age = value;
        }
        else {
            throw new Error("Siz notog'ri yosh kiritidingiz");
        }
    }
}
// method1() {}
// method2() {}
Person.isFlaying = false;
const ibrokhim = new Person("Ibrokhim", 23);
const ismoil = new Person("Ismoil", 24);
// const ibrokhim: { name: string; age: number } = { name: "Ibrokhim", age: 23 };
// const ismoil: { name: string; age: number } = { name: "Ibrokhim", age: 23 };
// console.log(ibrokhim.info(2));
// console.log(Person.description());
// console.log(ismoil);
// console.log(ibrokhim);
// ibrokhim.age = 24;
// ibrokhim.age = -1;
// console.log(ibrokhim.age);
if ({} instanceof Person) {
    console.log("Tegishli");
}
else {
    console.log("Tegishl emas");
}
//# sourceMappingURL=index.js.map