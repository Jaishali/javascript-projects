//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
food = food.split(",");
food= food.sort()
console.log(food);
equipment = equipment.split(",");
equipment= equipment.sort()
console.log(equipment);
pets = pets.split(",");
pets= pets.sort()
console.log(pets);
sleepAids = sleepAids.split(",");
sleepAids= sleepAids.sort()
console.log(sleepAids);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold =[];
cargoHold.push(food);
cargoHold.push(equipment);
cargoHold.push(pets);
cargoHold.push(sleepAids);

console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
console.log(cargoHold[0][3]);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
