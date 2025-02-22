// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age, mass = 54 ,color){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.color = color;
   }
}

let tortoise = new Astronaut('Speedy', 120, 'red');

console.log(tortoise.name, tortoise.age, tortoise.mass,  tortoise.color);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!




class Car {
  constructor(make, model, year, color, mpg){
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.mpg = mpg;
  }
}
let myCar = new Car('Tesla', 'Model S', 2019)
console.log(myCar);
