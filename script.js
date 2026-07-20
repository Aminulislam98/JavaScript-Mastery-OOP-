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

// Challenge Exercise
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 120);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
