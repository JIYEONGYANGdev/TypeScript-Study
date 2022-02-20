"use strict";
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var x = 10;
var y = 20;
var isBeginner = true;
var total = 0;
var name = 'jiyeong';
var sentence = "\nmy name is ".concat(name, "\ni am a beginner in TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
var person1 = ['Chris', 22]; // number of elements and the order fixed
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
; // assign enum with the value
var c = Color.Green;
console.log(c); // 1 // 6
// any type - do not check for type when construct .. or else properties with . dot method
var randomValue = 10;
randomValue = true;
randomValue = 'Sootully';
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase(); 
// unknown
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
// console.log(myVariable.name);
// myVariable();
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase(); 
var multiType; // recommend instead of 'any' type
multiType = 20;
multiType = true;
// any type has no intellisense (.properties suggestion)
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
// add('10', 5); // error-type checking
add(5); // no error, num2 parameter is optional (== ?)
console.log(add(5));
//* interface
// to specify an object as a type in typescript
// function fullName(person: {firstName: string, lastName: string}) {
//   console.log(`${person.firstName} ${person.lastName}`)
// } 
var p = {
    firstName: 'Bruce'
};
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
fullName(p);
