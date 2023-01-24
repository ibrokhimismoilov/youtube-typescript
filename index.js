"use strict";
// TypeScript generic type
function getName(person) {
    console.log(person.name);
}
getName({ name: "Ismoil" });
function getProperty(obj, key) {
    return obj[key];
}
const result = getProperty({ name: "Ibrokhim", age: 23, lastName: "Ismoilov" }, "lastName");
//# sourceMappingURL=index.js.map