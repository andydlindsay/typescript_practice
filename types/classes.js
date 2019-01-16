"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name, username) {
        this.username = username;
        this.type = '';
        this.age = 27;
        this.name = name;
    }
    Person1.prototype.printAge = function () {
        console.log(this.age);
    };
    Person1.prototype.setType = function (newType) {
        this.type = newType;
    };
    return Person1;
}());
var person1 = new Person1('Max', 'max');
person1.printAge();
console.log(person);
person1.setType('hero');
console.log(person);
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(username) {
        var _this = _super.call(this, 'Max', username) || this;
        _this.username = username;
        _this.age = 31;
        _this.setType('cool guy');
        return _this;
    }
    return Max;
}(Person1));
var person2 = new Max('max2');
console.log(person2);
person2.printAge();
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Flower';
console.log(plant.species);
// Static Properties and Methods
// static properties of a class can be accessed even if the class has not been instantiated
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCirc = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCirc(4));
// Abstract Classes
// abstract classes cannot be directly instantiated, they must be used through extension and abstract methods must be overriden
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newITProject = new ITProject();
console.log(newITProject);
newITProject.changeName('New IT Project');
console.log(newITProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right);
