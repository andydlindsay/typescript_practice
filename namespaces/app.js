var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateArea(width, length) {
        return width * length;
    }
    MyMath.calculateArea = calculateArea;
})(MyMath || (MyMath = {}));
// compile all *.ts into one js file
// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts
/// <reference path='circleMath.ts' />
/// <reference path='rectangleMath.ts' />
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateArea(10, 20));
