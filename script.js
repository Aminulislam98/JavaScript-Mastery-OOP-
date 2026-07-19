'use strict';
// Construction function and the new operator
const Person = function (firstName, birthYear) {
  ((this.firstName = firstName), (this.birthYear = birthYear));
};

const aminul = new Person('Aminul islam', 2003);
console.log(aminul);

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};
aminul.calcAge();

// Different user
const matilda = new Person('Matilda', 2000);
matilda.calcAge();

console.log(aminul.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(aminul));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Home Care Agency';
console.log(aminul.species);
console.log(aminul.hasOwnProperty('firstName'));
console.log(aminul.hasOwnProperty('species'));
