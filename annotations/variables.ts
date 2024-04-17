//primitive datatypes
let age: number = 5;

let name: string = "Pandiarajan";

let hasSurname: boolean = false;

let historyOf: null = null;

//Array
let colors: string[] = ["red", "blue", "green"];

//Builin objects
let now: Date = new Date();

//Classes
class Car {

}
let car: Car = new Car();

// Object
let point: { x: number; y: number; } = {
  x: 23,
  y: 45
}

let user = { fname: 'test', lname: 'test' };

//Function
let log: (i: number) => void = (i: number) => {
  console.log(i);
}