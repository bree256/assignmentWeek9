//Build a simple loop, inside a function,
//that takes an array and prints the value of the array to the console.
function arrayLoopValue(array) {
  for (i = 0; i < array.length; i++) i += 1;
  console.log(i);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayLoopValue(array);
