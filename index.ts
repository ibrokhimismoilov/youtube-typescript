// TypeScript interface.

// let a: number = 1;
interface IPerson {
  _name: string;
  _age: number; // _age?: number;
  seyHello(): string; // seyHello: () => string;
}

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

// class Person {}

// class Test {}

interface IStudent extends IPerson {
  _group: string;
  _course: number;
}

class Student extends Person implements IStudent {
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

const ibrokhim: IPerson = new Person("Ibrokhim", 23);

console.log(ibrokhim);
console.log(ibrokhim.seyHello());

const sardor: IStudent = new Student("Sardor", 24, "617-guruh", 4);

console.log(sardor);
console.log(sardor.seyHello());
