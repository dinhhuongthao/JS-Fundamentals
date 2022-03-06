"use strict";

// const interface = 'Audio';
// const private = 534;

/*
function logger() {
  console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2001);
console.log(age1);

///////////////////////////
// Function expression
const calcAge2 = function (birthYear) { //anonymous function
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

///////////////////////////
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(2001, 'DHT'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}


const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(555, 111);


const friends = ['Micheal', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2004, 2013);
console.log(friends);
console.log(friends.length);


////////////////////////////
// Array
const friends = ['Micheal', 'Steven', 'Peter'];

// Add elements
let newLength = friends.push('Jay');
newLength = friends.unshift('John');

// Remove elements
friends.pop();
const popped = friends.pop(); // return popped element

friends.shift();
console.log(friends);

// Checking exist or not elements
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log('You have a friend call Peter');
}


/////////////////////
// Code Challenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

for (let i = 0; i < tips.length; i++) {}

/////////////////
// Object
const jonasArray = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Micheal", "Peter", "Steven"],
];

const jonas = {
	firstName: "Jonas",
	lastName: "Schemedtmann",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]); // put expression inside square brackets

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
	"What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
} else {
	console.log(
		"Wrong request! Choose between firstName, lastName, age, job, and friends"
	);
}

jonas.location = "Portugal";
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
	firstName: "Jonas",
	lastName: "Schemedtmann",
	birthYear: 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
	hasDriversLicense: false,

  // expression function
  // method = property holds value
  // function value like number value
	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// calcAge: function () {
  //   // console.log(this);
	// 	return 2037 - this.birthYear;
	// }

  calcAge: function () {
		this.age = 2037 - this.birthYear;
    return this.age;
	},

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  }
};

// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge());
// console.log(jonas.age);
console.log(jonas.getSummary());



const mark = {
	firstName: "Mark",
	lastName: "Miller",
  mass: 78,
  height: 1.82,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi; 
  }
};

const mark = {
	firstName: "John",
	lastName: "Smith",
  mass: 85,
  height: 1.93,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi; 
  }
};

mark.calcBMI();
console.log(mark.bmi);

///////////////////
// Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


const jonasArray = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Micheal", "Peter", "Steven"],
];

for (let i = 0; jonasArray.length; i++) {
  console.log(jonasArray[i]);
}

let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log('Loop is about to end...');
}
console.log(dice);
*/

const a = [17, 21, 23];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]} C in ${i+1} days`);
  }
}

printForecast(a);

