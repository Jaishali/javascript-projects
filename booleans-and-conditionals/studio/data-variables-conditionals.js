// Initialize Variables below
let date = "Monday 2019-03-18";
let time = '10:05:34';
let  = 'true';
let astronautCount = 7;
let astronautStatus = 'ready';
let  averageAstronaut = '80.7';
let crewMassKg = 'astronautCount * averageAstronautMassKg';
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = 'crewMassKg + fuelMassKg + shuttleMassKg';
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount<=7);
// add logic below to verify all astronauts are ready
if(astronautStatus = 'ready');
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg <= maximumMassLimit);
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius <= minimumFuelTemp || fuelTempCelsius >= maximumFuelTemp);
// add logic below to verify the fuel level is at 100%
if(fuelLevel = '100%');
// add logic below to verify the weather status is clear
if (weatherStatus ='clear');{
// Verify shuttle launch can proceed based on above conditions
console.log("All system are a go!");
console.log("-------------------------------");
console.log("date" + date);
console.log("time" + time);
console.log("astronautCount" + astronautCount);
console.log("crewMassKg" + crewMassKg);
console.log("fuelMassKg" + fuelMassKg);
console.log("shuttleMassKg" + shuttleMassKg);
console.log("totalMasskg" + totalMassKg);
console.log("fuelTempCelsius" + fuelTempCelsius); 
console.log("weatherStatus" +weatherStatus);
console.log("------------------------------------------------");
console.log("Have a safe flight");
}



