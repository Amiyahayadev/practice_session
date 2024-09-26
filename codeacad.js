/*
 * This is a
 * Multiline comment in javascript
 */

// This is a single line comment in javascript

const WORD = "codecademy";
console.log(WORD.length);

const GOAL = `learn web developement`;
console.log(`One does not simply ${GOAL}`);

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}
const square = new Rectangle(2, 2);

let primaryCandidate = null;

const number = 7;
const dayInAWeek = number;
const colorsOfRainbow = number;

Math.random();

let service = "credit";
let month = "May 30th";
let displayText = "Your " + service + " bill is due on " + month + ".";

console.log(displayText);

// Assignment operators
let number$ = 100;
number$ = number$ + 10;
number$ += 10;
console.log(number$);

number$ -= 100
console.log(number$)

var a;
console.log(a)

const GRADE = 80

if (GRADE >= 90) {
    console.log("A, Excellent!")
} else if (GRADE >= 80) {
    console.log("B, Good")
}