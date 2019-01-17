// compile all .ts into one .js file
// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts

/// <reference path='circleMath.ts' />
/// <reference path='rectangleMath.ts' />
// tsc app.ts --outFile app.js

console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateArea(10, 20));
