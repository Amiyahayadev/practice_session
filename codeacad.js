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
let drawCats = function (howManyTimes) {
	for (let i = 0; i < howManyTimes; i++) {
		console.log("cat" + i + " " + "=^.^=");
	}
};
drawCats(5);
// STRING METHODS
"Hello I'm Amina, a seasoned content writer and budding frontend developer!".slice(
	0,
	15
);
("Hello I'm Amina");
"Hello there, how are you doing".toUpperCase();
("HELLO THERE, HOW ARE YOU DOING");
"HELLO THERE, HOW ARE YOU DOING".toLowerCase();
("hello there, how are you doing");
"HELLO THERE, HOW ARE YOU DOING"[0].toUpperCase() +
	"ELLO THERE, HOW ARE YOU DOING".toLowerCase();
("Hello there, how are you doing");
"hELlo THERE, hOW ARE yOu doINg?"[0].toUpperCase() +
	"hELlo THERE, hOW ARE yOu doINg?".slice(1).toLowerCase();
("Hello there, how are you doing?");

// Take a string, capitalize the first letter, and turn the rest of the string into lowercase

let uglyString = "hELlo THERE, hOW ARE yOu doINg?";
let lowerCaseStr = uglyString.toLowerCase();
let firstCharacter = lowerCaseStr[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let restOfString = lowerCaseStr.slice(1);
firstCharacterUpper + restOfString;
("Hello there, how are you doing?");

// Method two: capitalize the first letter, and turn the rest of the string into lowercase
let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
("Hello there, how are you doing?");

////////////////////////////////////////
// let the rider be allowed to pass if they're atleast 60 inches tall
// IF riderHeight is GREATER THAN or EQUAL to 60 inches

let riderHeight = 60;
let heightRestriction = 60;
riderHeight >= heightRestriction;
true
// let the rider be allowed to pass if they're no more than 48 inches tall
// IF riderHeight is LESS THAN or EQUAL to 48 inches
undefined
riderHeight = 48;
heightRestriction = 48;
riderHeight <= heightRestriction;
true
riderHeight = 50;
heightRestriction = 48;
riderHeight <= heightRestriction;
false
let mySecretNumber = 5;

let chicoGuess = 3;
mySecretNumber === chicoGuess;
false
let harpoGuess = 7;
mySecretNumber === harpoGuess;
false
let grouchoGuess = 5;
mySecretNumber === grouchoGuess;
true

let stringNumber = "5";
let actualNumber = 5;
stringNumber == actualNumber;
true
0 == false
true
0 == "false"
false
false = "false"

false
1 == true
true
0 == false
true
0 == '0'
true
// Movie time: if someone is 13 or over, they’re allowed in. If they’re not over 13, but with an adult company, they’re also allowed in. Otherwise, they can’t see the movie.



true
// Movie time: if someone is 13 or over, they’re allowed in. If they’re not over 13, but with an adult company, they’re also allowed in. Otherwise, they can’t see the movie.
let age = 12;
let accompanied = true;
if (age >= 13) {
    console.log("Allowed in");
} else if (age < 13 && accompanied) {
    console.log("Allowed in too.");
} else {
    console.log("Not allowed");
}
