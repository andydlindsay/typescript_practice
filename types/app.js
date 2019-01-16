"use strict";
// string
var myName = 'Max';
// number
var myAge = 27;
// boolean
var hasHobbies = true;
// array
var hobbies = ['Cooking', 'Sports'];
var scores = [75, 25, 50];
var mixedBag = [100, 'Basketball', false];
// tuples
var address = [1234, 'Fake Street'];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Gray; // stores 0 in myColor
// any
var car2 = 'BMW';
car2 = {
    brand: 'BMW',
    series: 3
};
// functions
function returnMyName() {
    return myName;
}
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// function types
var myMultiply = multiply;
// objects
var userData = {
    name: 'Max',
    age: 27
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge = 27;
// check types
var finalValue = 27;
if (typeof finalValue === 'number') {
    console.log('finalValue is a number');
}
// never type
function neverReturns() {
    throw new Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
canThisBeAny = 'twelve';
