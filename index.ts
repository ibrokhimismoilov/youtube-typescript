// TypeScript [public, private, protected, (readonly)].

const PI = 3.14;

class Person {
  public readonly _name: string = "";
  // public _name: string = "";
  // private _name: string = "";
  // protected _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // constructor(public name: string, private age: number) {}

  seyHello(): string {
    return `Assalomu alaykum. Mening ismim ${this._name}!`;
  }
}

class Student extends Person {
  _group: string = "";
  _course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._group = group;
    this._course = course;
  }

  info(): string {
    return `
      Ism: ${this._name}
      Yosh: ${this._age}
      Kurs: ${this._course}
      Guruh: ${this._group}
    `;
  }
}

const ibrokhim: Person = new Person("Ibrokhim", 23);
console.log(ibrokhim);
// ibrokhim._name = "Ismoil";

const sardor: Student = new Student("Sardor", 24, "617-guruh", 4);
console.log(sardor);
// sardor.
// sardor.
