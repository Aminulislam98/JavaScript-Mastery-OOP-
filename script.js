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

// class constructor
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Method will be added to prototype
  calcAge() {
    console.log(2026 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const islam = new PersonCl('islam', 2003);
islam.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
islam.greet();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
account.latest = 50;
console.log(account.movements);

// Object Create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Create new object under steven's name
const steven = Object.create(PersonProto);
console.log(steven);

// Added properties
steven.name = 'Steven';
steven.birthYear = 2002;

// Calling calcAge and console
steven.calcAge();
console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);

sarah.calcAge();

// Exercise
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car2('Ford', 129);
console.log(ford);
console.log(ford.speedUS);
ford.brake();
ford.speedUS = 50;
console.log(ford);

// Inheritance  Between 'Classed": Constructor Functions
const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person1.call(this, firstName, birthYear);
  this.course = course;
};
console.log('before', Student.prototype);

// Linking prototypes
Student.prototype = Object.create(Person1.prototype);

console.log('After', Student.prototype);

Student.prototype.introduce = function () {
  console.log(
    `hey, I am ${this.firstName} and I am currently studying at ${this.course}`,
  );
};

const mike = new Student('Mike', 1999, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();
console.log(mike.__proto__.__proto__);
