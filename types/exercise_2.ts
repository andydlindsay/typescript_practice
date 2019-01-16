// Exercise 1 - How was your TypeScript Class?
class Car {
    acceleration: number = 0;
    constructor(public name: string) {}
    honk() {
        console.log('Tooooooot!');
    }
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}
const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
    width: number = 0;
    length: number = 0;
}
class Rectangle extends BaseObject {
    calcSize(): number {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = '';
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = '';
        }
    }
}
const person = new Person();
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);
