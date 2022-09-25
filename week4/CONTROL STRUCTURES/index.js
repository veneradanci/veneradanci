// 1. display in the console the numbers from 1 to 20
for (var x = 1; x <= 20; x++) {
  console.log(x);
}
//2. display in the console the odd numbers from 1 to 20
let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (var x = 1; x <= 20; x += 2) {
  console.log(x);
}
//3. compute the sum of the elements of an array and display it in the console
var array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
{
  console.log(sum);
}
//4. compute the maximum of the elements of an array and display it in the console
const myArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let maxElement = 0;
for (let i = 0; i <= myArray.length; ++i) {
  if (myArray[i] > maxElement) {
    maxElement = myArray[i];
  }
}
console.log(maxElement);

//5.compute how many times a certain element appears in an array

const numbers = [1, 2, 3, 4, 5, 6, 4, 8, 9, 10, 6, 3, 4];
let target = 4;
let counter = 0;
for (let nums of numbers) {
  if (nums === target) {
    counter++;
  }
}
console.log(counter);
//Challenge using nested for generate the following pattern: 0101
//0 1 0 1
//1 0 1 0
//0 1 0 1
//1 0 1 0
for (var a = 0; a < 4; a++) {
  var row = "";
  for (var b = 0; b < 4; b++) {
    if (a % 2 === 0) {
      row = row + (b % 2 === 0 ? "0" : "1") + " ";
    } else {
      row = row + (b % 2 === 0 ? "1" : "0") + " ";
    }
  }
  console.log(row);
}
