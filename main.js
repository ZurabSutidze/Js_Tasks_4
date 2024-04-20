///////////////////////    1    //////////////////////////////

// class Employee {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   class Developer extends Employee {
//     constructor(name, age, programmingLanguages) {
//       super(name, age);
//       this.programmingLanguages = programmingLanguages;
//     }

//     getProgrammingLanguages() {
//       return this.programmingLanguages;
//     }
//   }

//   class Marketer extends Employee {
//     constructor(name, age, marketingTools) {
//       super(name, age);
//       this.marketingTools = marketingTools;
//     }

//     getMarketingTools() {
//       return this.marketingTools;
//     }
//   }

//   class Accountant extends Employee {
//     constructor(name, age, skills) {
//       super(name, age);
//       this.skills = skills;
//     }

//     getSkills() {
//       return this.skills;
//     }
//   }

//   const johnDeveloper = new Developer("John", 30, "JavaScript");
//   const emilyMarketer = new Marketer("Emily", 28, "Social Media");
//   const davidAccountant = new Accountant("David", 35, "Financial Reporting");

//   console.log(johnDeveloper.getProgrammingLanguages());
//   console.log(emilyMarketer.getMarketingTools());
//   console.log(davidAccountant.getSkills());

///////////////////////    2    //////////////////////////////

// class Car {
//   constructor() {
//     this.Cars = [];
//   }

//   addCar(addCar) {
//     this.Cars.push(addCar);
//   }

//   deleteCar(deleteCar) {
//     const index = this.Cars.findIndex((car) => car === deleteCar);
//     this.Cars.splice(index, 1);
//   }

//   updateCar(car, updatedCar) {
//     const index = this.Cars.indexOf(car);
//     this.Cars[index] = updatedCar;
//   }

//   getAllCars() {
//     return this.Cars;
//   }
// }

// const carManager = new Car();

// carManager.addCar("Toyota");
// carManager.addCar("Honda");
// carManager.addCar("Ford");

// console.log("All cars:", carManager.getAllCars());

// carManager.deleteCar("Honda");
// console.log("After deleting:", carManager.getAllCars());

// carManager.updateCar("Toyota", "BMW");
// console.log("After updating:", carManager.getAllCars());
