class Person1 {
    name: string;
    private type: string = '';
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(): void {
        console.log(this.age);
    }

    setType(newType: string): void {
        this.type = newType;
    }
}

const person1 = new Person1('Max', 'max');
person1.printAge();
console.log(person);
person1.setType('hero');
console.log(person);

// Inheritance
class Max extends Person1 {
    constructor(public username: string) {
        super('Max', username);
        this.age = 31;
        this.setType('cool guy');
    }
}

const person2 = new Max('max2');
console.log(person2);
person2.printAge();

// Getters and Setters
class Plant {
    private _species: string = 'Default';

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        }
    }

    get species(): string {
        return this._species;
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'Flower';
console.log(plant.species);

// Static Properties and Methods
// static properties of a class can be accessed even if the class has not been instantiated
class Helpers {
    static PI: number = 3.14;
    static calcCirc(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCirc(4));

// Abstract Classes
// abstract classes cannot be directly instantiated, they must be used through extension and abstract methods must be overriden
abstract class Project {
    projectName: string = 'Default';
    budget: number = 0;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}
const newITProject = new ITProject();
console.log(newITProject);
newITProject.changeName('New IT Project');
console.log(newITProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public readonly name: string) {}
    static getInstance(): OnlyOne {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right);
