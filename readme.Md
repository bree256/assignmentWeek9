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
A JavaScript function is a block of code designed to perform a particular task.
and is executed when "something" invokes it (calls it).

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)The code to be executed, by the function, is placed inside curly brackets:

Function Return
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
