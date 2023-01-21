// TypeScriptda sinflar

class Person {
  _name: string;
  _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // 1ta klassda constructordan faqat 1 marotaba foydalaniladi
  // constructor () {}

  // method
  info(value: number): string {
    return `${this._name} - ${this._age + value} yoshda`;
  }
  // method1() {}
  // method2() {}

  static isFlaying = false;
  static description(): string {
    return `Bu klass Person haqida......`;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0 && value < 100) {
      this._age = value;
    } else {
      throw new Error("Siz notog'ri yosh kiritidingiz");
    }
  }
}

const ibrokhim: Person = new Person("Ibrokhim", 23);
const ismoil: Person = new Person("Ismoil", 24);

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
} else {
  console.log("Tegishl emas");
}
