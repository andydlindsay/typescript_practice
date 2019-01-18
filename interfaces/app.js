"use strict";
// question mark indicates that the prop is optional
// square bracket notation takes care of unknown props
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (lastName) {
        console.log("Good day Mrs/Mr " + this.name + " " + lastName + "!");
    };
    return Person;
}());
function greet(person) {
    console.log('Hello, ' + person.name);
}
function birthday(person) {
    person.age += 1;
    console.log(person.name + " is now " + person.age + " years old!");
}
var person = {
    name: 'Max',
    age: 27,
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log("Good day Mrs/Mr " + this.name + " " + lastName + "!");
    }
};
var person2 = new Person('Susan', 38);
greet(person);
birthday(person);
person.greet('Destruction');
greet(person2);
birthday(person2);
var myDoubleFunction = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(myDoubleFunction(2, 3));
var oldPerson = {
    possible: true,
    age: 87,
    name: 'Susan',
    greet: function (surname) {
        console.log("Greetings " + this.name + " " + surname + "! It is pleasant to see you today.");
    }
};
oldPerson.greet('Collins');
