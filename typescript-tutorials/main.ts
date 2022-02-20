export {}
let message = 'welcome back'
console.log(message)

let x = 10;
const y = 20;

let isBeginner: boolean = true;
let total:number = 0;
let name:string = 'jiyeong';

let sentence:string = `
my name is ${name}
i am a beginner in TypeScript`

console.log(sentence)

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];

let person1: [string, number] = ['Chris', 22]; // number of elements and the order fixed

enum Color {Red = 5, Green, Blue}; // assign enum with the value

let c: Color = Color.Green;

console.log(c); // 1 // 6

// any type - do not check for type when construct .. or else properties with . dot method
let randomValue: any = 10;
randomValue = true;
randomValue = 'Sootully';

// let myVariable: any = 10;

// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase(); 


// unknown

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
  return !!obj &&
  typeof obj === 'object' &&
  'name' in obj
}

// console.log(myVariable.name);
// myVariable();

if(hasName(myVariable)) {
  console.log(myVariable.name)
}

// (myVariable as string).toUpperCase(); 


let multiType : number | boolean; // recommend instead of 'any' type
multiType = 20;
multiType = true;

// any type has no intellisense (.properties suggestion)


function add(num1:number, num2?:number): number { // : type of return result 
  if(num2) return num1 + num2;
  else return num1;
}

add(5, 10);
// add('10', 5); // error-type checking

add(5); // no error, num2 parameter is optional (== ?)
console.log(add(5))

//* interface
// to specify an object as a type in typescript
// function fullName(person: {firstName: string, lastName: string}) {
//   console.log(`${person.firstName} ${person.lastName}`)
// } 

let p = {
  firstName: 'Bruce',
  // lastName: 'Wayne'
}

// console.log(fullName(p))

// create interface as a type for func parameter
interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`)
} 

fullName(p)

