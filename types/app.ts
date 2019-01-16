// string
const myName: string = 'Max';

// number
const myAge: number = 27;

// boolean
const hasHobbies: boolean = true;

// array
const hobbies: string[] = [ 'Cooking', 'Sports' ];
const scores: number[] = [ 75, 25, 50 ];
const mixedBag: any[] = [ 100, 'Basketball', false ];

// tuples
const address: [number, string] = [1234, 'Fake Street'];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue // 101
}
const myColor: Color = Color.Gray; // stores 0 in myColor

// any
let car2: any = 'BMW';
car2 = {
    brand: 'BMW',
    series: 3
};

// functions
function returnMyName(): string {
    return myName;
}

// void
function sayHello(): void {
    console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// function types
const myMultiply: (val1: number, val2: number) => number = multiply;

// objects
const userData: { name: string, age: number } = {
    name: 'Max',
    age: 27
};

// complex object
const complex: { 
    data: number[],
    output: (all: boolean) => number[] 
} = {
    data: [ 100, 3.99, 10 ],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// type alias
type Complex = { 
    data: number[],
    output: (all: boolean) => number[] 
};
const complex2: Complex = {
    data: [ 100, 3.99, 10 ],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
const myRealAge: number | string = 27;

// check types
const finalValue = 27;
if (typeof finalValue === 'number') {
    console.log('finalValue is a number');
}

// never type
function neverReturns(): never {
    throw new Error('An error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
canThisBeAny = 'twelve';
