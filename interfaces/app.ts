// question mark indicates that the prop is optional
// square bracket notation takes care of unknown props

// The interface is a 'contract' that can be set up as a type.
// All the conditions in the interface have to be fulfilled
// by anything of that type (e.g. an argument to a function).
interface Person {
    name: string;
    age: number;
    possible?: boolean;
    [propName: string]: any;
    greet(lastName: string): void;
}

class Person implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(lastName: string): void {
        console.log(`Good day Mrs/Mr ${this.name} ${lastName}!`);
    }
}

function greet(person: Person): void {
    console.log('Hello, ' + person.name);
}

function birthday(person: Person): void {
    person.age += 1;
    console.log(`${person.name} is now ${person.age} years old!`);
}

const person = {
    name: 'Max',
    age: 27,
    hobbies: [ 'Cooking', 'Sports' ],
    greet(lastName: string): void {
        console.log(`Good day Mrs/Mr ${this.name} ${lastName}!`);
    }
};

const person2 = new Person('Susan', 38);

greet(person);
birthday(person);
person.greet('Destruction');
greet(person2);
birthday(person2);

// Function Types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

const myDoubleFunction: DoubleValueFunc = function(num1: number, num2: number) :number {
    return (num1 + num2) * 2;
};

console.log(myDoubleFunction(2, 3));

// Interface Inheritance
interface AgedPerson extends Person {
    possible: boolean;
}

const oldPerson: AgedPerson = {
    possible: true,
    age: 87,
    name: 'Susan',
    greet(surname: string): void {
        console.log(`Greetings ${this.name} ${surname}! It is pleasant to see you today.`);
    } 
};

oldPerson.greet('Collins');
