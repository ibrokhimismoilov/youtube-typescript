// TypeScript classes & inheritance.
// interface IPerson {
//   _name: string; // name?: string,
//   _age: number;
//   seyHello(): string; // sayHello: () => string;
// }

// type IPerson = {
//   _name: string; // name?: string,
//   _age: number;
//   seyHello(): string; // sayHello: () => string;
// };

//======================================================

// interface IPerson {
//   _name: string;
//   _age: number;
// }

// interface IPerson {
//   seyHello(): string;
// }

// type IPerson {
//   _name: string;
//   _age: number;
// }

// type IPerson {
//   seyHello(): string;
// }

//======================================================

// interface IPersonProps {
//   _name: string;
//   _age: number;
// }

// interface Test {}

// interface IPerson extends IPersonProps, Test {
//   seyHello(): string;
// }

type IPersonProps = {
  _name: string;
  _age: number;
};

type Test = {};

type IPerson = IPersonProps &
  Test & {
    seyHello(): string;
  };

class Person implements IPerson {
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

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

  seyHello(): string {
    const parentMethod = super.seyHello();
    return `${parentMethod} Men ${this._course}-kursning, ${this._group}da o'qiyman.`;
  }
}

class Teacher extends Person {
  disciplines: string[] = [];

  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }

  info(): string {
    const parent = super.seyHello();
    return `${parent} Men ${this.disciplines[0]} dan dars beraman`;
  }
}

const ibrokhim: Person = new Person("Ibrokhim", 23);

console.log(ibrokhim);
console.log(ibrokhim.seyHello());

const sardor: Student = new Student("Sardor", 24, "617-guruh", 4);
// sardor.
console.log(sardor);
console.log(sardor.seyHello());

// let a: unknown = 1;
// let b: number = <number>a

const newSardor: Person = <Person>sardor;
// newSardor.

console.log(newSardor);
console.log(newSardor.seyHello());

const abror: Teacher = new Teacher("Abror", 34, ["React", "JS"]);

console.log(abror);
console.log(abror.seyHello());
console.log(abror.info());
