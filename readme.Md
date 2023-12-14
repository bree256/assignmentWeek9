_SUMMARY OF ARTICLES_
Javascript Array - an Object allows you to store keyed collections of values basically Arrays are lists of items.
_Javascript Array methods (they are used to change or manipulate the array)_
-The length property returns the length of an array:
-The toString() method returns an array as a comma separated string
-The pop() method removes the last element from an array.
-The push() method adds a new element to an array.
-The shift() method removes the first element of an array (and "shifts" the other elements to the left).
-The unshift() method adds new elements to the beginning of an array.
-The concat() method merges (concatenates) arrays
-The splice() method adds new elements to an array and With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
-The slice() method slices out a piece of an array into a new array.
etc

FUNCTIONS
A function is a block of reusable code written to perform a specific task/A JavaScript function is a block of code designed to perform a particular task.
and is executed when "something" invokes it (calls it).

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)The code to be executed, by the function, is placed inside curly brackets:

Function Return
return is a directive that returns a value to the function after the code within it has been executed.
When JavaScript reaches a return statement, the function will stop executing.
Functions often compute a return value. The return value is "returned" back to the "caller":
e.g
const turtles = ["Raphael", "Michelangelo", "Leonardo", "Donatello"]
function turtlePower(turtles) {
return turtles[3];
}

To create a function we can use a function declaration.
e.g
function showMessage() {
alert( 'Hello everyone!' );
}
To call a function you use its name
e.g
function showMessage() {
alert( 'Hello everyone!' );
}
showMessage();

Local Variables
A variable declared inside a function is only visible inside that function.
function showMessage() {
let message = "Hello, I'm JavaScript!"; // local variable

alert( message );
}
showMessage();
alert( message );

Outer Variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.
A function can access an outer variable as well, for example:
let userName = 'John';
function showMessage() {
let message = 'Hello, ' + userName;
alert(message);
}
showMessage();

Parameters
We can pass data to functions using parameters.
Function parameters are the names listed in the function definition and Function arguments are the real values passed to (and received by) the function.

Control flow is the order in which statements are executed in a program;
There are three main types of flows namely;
-if/else statements - The if…else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
e.g function isPlural(word) {
if (word.endsWith('s')) {
return true
} else return false
}

-switch statements - The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed.
The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.
e.g const food = 'salad';

switch (food) {
case 'oyster':
console.log('The taste of the sea');
break;
case 'pizza':
console.log('A delicious pie');
break;
default:
console.log('Enjoy your meal');
}

-loops - Loops are iteration statements that will keep running until there is either nothing left to loop over, or if the condition becomes false.
//example
for (let i = 0; i < 4; i += 1) {
console.log(i);
};

// Output: 0, 1, 2, 3
While Loop
The while loop creates a loop that is executed as long as a specified condition evaluates to true
//example
let i = 0;

while (i < 5) {  
 console.log(i);
i++;
}
