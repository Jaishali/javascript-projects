//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008, 1];
let element2 = ['helium', 'He', 4.003, 2];
let element26 = ['iron', 'Fe', 55.85, 26];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
console.log(element1.push());
console.log(element2.push());
console.log(element26.push());
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(element1[1], element2[1][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(element1[1], element2[0][1], element26[0][2]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
console.log(element1[1], element2[0][1],element26[0][2]);