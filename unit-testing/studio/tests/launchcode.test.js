// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("testing launchcode", function(){
    expect(launchcode.organization).toBe("nonprofit");
 });
 test("check executiveDirector",function(){
expect(launchcode.executiveDirector).toBe("Jeff");
 });
 test("check percentageCoolEmployees", function(){
  expect(launchcode.percentageCoolEmployees).toBe("100");
});
test("check program",function(){
  expect(launchcode.programOffered[0]).toBe("Lc101");
  expect(launchcode.programOffered[1]).toBe("LaunchCode Women+");
  expect(launchcode.programOffered[2]).toBe("CoderCamp");
  expect(launchcode.programOffered.length).toBe(3);
  });
 });
  
describe("should have a method, launchcode, which", function(){
test("should return 'Launch!' for numbers evenly divisible by only 2", function(){
expect(launchcode.launchcode(2)).toBe("Launch!");
});
test("should return 'Code!' for numbers evenly divisible by only 3", function(){
  expect(launchcode.launchcode(3)).toBe("Code!");
});
test("should return 'Rocks!' for numbers evenly divisible by only 5", function(){
  expect(launchcode.launchcode(5)).toBe("Rocks!");
});
test("should return 'LaunchCode!' for numbers evenly divisible by 2 and 3",function(){
expect(launchcode.launchcode(2, 3)).toBe('LaunchCode!');
});
test("should return 'Code Rocks!' for numbers evenly divisible by 3 and 5",function(){
  expect(launchcode.launchcode(3, 5)).toBe('Code Rocks!');
  });
  test("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by 2 and 5",function(){
    expect(launchcode.launchcode(2, 5)).toBe('Launch Rocks! (CRASH!!!!)');
    });
    test("should return 'LaunchCode Rocks!' for numbers evenly divisible by 2,3 and 5",function(){
      expect(launchcode.launchcode(2, 3 ,5)).toBe('LaunchCode Rocks!');
      });
      test("should return 'Rutabagas! That doesnot't work.' for numbers evenly not divisible by 2,3 and 5",function(){
        expect(launchcode.launchcode(2, 3 ,5)).toBe('Rutabagas! That doesnot work');
        });
        
});
