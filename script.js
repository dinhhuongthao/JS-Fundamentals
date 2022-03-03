/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log('String with \n\
multiple \n\
line');

console.log(`String
multiple 🎶
lines`);
*/

/*
const age = 13;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} year(s) 😓`);
}
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

// type coercion
// operator+ convert num to string, others convert string to number
console.log('I am ' + 23 + ' years old'); //  string
console.log('23' - '10' - 3); // 10
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // n = '11'
n = n - 1; // n = 10
console.log(n);
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Jonas'));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height != undefined) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

/*
const age = 18;
if (age === 18) {
  console.log('You just became an adult :D');
}

const favourite = prompt("What's your favorite number?");
console.log(favourite);
*/

/*
const avgDolphins = (96 + 108 + 89) / 3
const avgKoalas = (88 + 91 + 110) / 3

if (avgDolphins > avgKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (avgDolphins < avgKoalas) {
  console.log('Koalas win the trophy 🏆');
} else {
  console.log('Both win the trophy!');
}
*/

/*
const age = 23;
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);