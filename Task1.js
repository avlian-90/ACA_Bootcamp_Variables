//1

let admin, name;
name = "John";
admin = name;
alert(admin);

//2 Name the variables.

let ourPlanetName = "Earth"; // The name of our planet
let currentVisitorName = "Liana"; // The name of current visitor

//3 What will be the output of i and n?

let i = 10;
let n = i++ % 5;
// n is 0 and i is 11;

//4 Swap a and b.

let a = 10,
  b = 3;
let c = a + b;
a = c - a;
b = c - a;

//5 Swap a and b, without using the third variable.

let a = 10,
  b = 3;
a = a + b;
b = a - b;
a = a - b;

//6 What is the output of the script?

let name = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name}`); // hello Ilya

//7 What will be the result for these expressions?

5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

//8 What is the output?

alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 2
alert(1 && null && 2); // 1, null
alert(alert(1) && alert(2)); // 1, undefined
alert(null || (2 && 3) || 4); // 3

//9 Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

if (!(age >= 14 && age <= 90))
  if (age < 14 || age > 90)
    if (-1 || 0)
      //10 What will the results of the expressions be inside if(...)?

      alert("first"); //true
if (-1 && 0) alert("second"); //false
if (null || (-1 && 1)) alert("third"); //true

//10 Write the code which asks for a login with prompt.

/* If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

let visitor = prompt("who are you?", "");

if (visitor === "Admin") {
  let password = prompt("Enter your password", "");
  if (password === "TheMaster") {
    alert("welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong Password!");
  }
} else if (visitor === "" || visitor === null) {
  alert("Canceled!");
} else {
  alert("I don't know you.");
}

//11 Create a script that prompts the visitor to enter two numbers and then shows their sum.

let a = +prompt("Enter a number", "");
let b = +prompt("Enter another number", "");
alert(a + b);
