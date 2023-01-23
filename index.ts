// TypeScript abstract classes.

// interface
interface IPerson {
  _name: string;
  _age: number;
  seyHello(): string;
  info(): string;
}

interface IStudent extends IPerson {
  _group: string;
  _course: number;
}

// classes
abstract class Person implements IPerson {
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  seyHello(): string {
    return `Assalomu alaykum. Mening ismim ${this._name}!`;
  }

  abstract info(): string;
}

class Student extends Person implements IStudent {
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

class Teacher extends Person {
  info(): string {
    return ``;
  }
}

// const ibrokhim: IPerson = new Person("Ibrokhim", 23);
// console.log(ibrokhim);

const sardor: IStudent = new Student("Sardor", 24, "617-guruh", 4);
console.log(sardor);
console.log(sardor.info());
