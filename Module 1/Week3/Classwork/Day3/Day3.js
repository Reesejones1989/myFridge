// const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];

// // console.log(movies[0])

// for (let i = 0; i < movies.length; i++){
//     console.log(movies[i].title)
// }

// const foo = {
//     someArray:[1,2,3]
// };
// console.log(foo.someArray[0]);

// const foo2 = {
//     someMethod: () => {
//         console.log("oh hai Mark");
//     },
// };
// foo2.someMethod();

// const foo3 = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// foo3[1][2];


// const player = {
//     name: 'Josh the great',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
//   }

//   const bigBadBoss = {
//     name: 'Magnardo the Merciless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: Infinity
//   }

//   const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }

//   //function used to create new objects
//   const createActor = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newActor = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newActor
//   }
//   const collection = [];



//   const char1 = createActor("Blazen", 99, 150, 1);
//   const char2 = createActor("???", -999, 1000, 1000)
//   const char3 = createActor("Blazen", 223, 23, 1)
// //   console.log(char1);
// //   console.log(char2);

//   collection.push(char1);
//   collection.push(char2);
//   collection.push(char3);

//   console.log(collection);

// class Character{
//     constructor(name){
//         this.name=name;
//     }
//     greet(otherPerson){
//         console.log(`${this.name} says: Oh Hi ${otherPerson}!`)
//     }
   
// }

// const me = new Character('Crixon');
// const you = new Character('Mark');

// me.greet(you.name)
// you.greet("What's up");
// theOtherGuy.greet("Hi");


// //The CLASSES
// class Character{

//     //PROPERTIES
//     constructor(name, age, eyes, hair, lovesCats = false){
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.age= age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats= lovesCats;
//     }
//     //METHODS
//     greet (otherCharacter){
//         console.log("hi" + otherCharacter + "!");
//     }
//     smite(){
//         console.log(" I smite thee you vile person");
//     }
// }
// class Hobbit extends Character{
//     constructor(name, age, eyes, hair){
//         super(name, age, eyes, hair);
//         this.skills=["thievery", "speed", "willpower"];
//     }
//     steal(){
//         console.log("lets get away!")
//     }
//     greet (otherCharacter) {
//         console.log('Greetings ' + otherCharacter);}
// }
// //OBJECTS
// const me = new Character("Crixon", 2, 12, "white", "true");
// const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
// console.log(frodo);

// frodo.steal();
// frodo.smite();


// class Car{
//     constructor(make, serialNumber){
//         this.make= make;
//         this.serialNumber=serialNumber;

//     }
//     drive(){
//         console.log("vroom vroom")
//     }
    
// }

// const newCar = new Car("Mazda", 12354)

// class Factory{
//     constructor(company){
//         this.company = company;
//         this.cars=[];
//     }
//     generateCar(){
//         const newCar= new Car(this.company, this.cars.length)
         
//         this.cars.push(newCar);
//     }
//     findCar(index){
// return this.cars[index]
//     }
// }

// const newFactory = new Factory("Tesla");
// const porche = new Factory('Porche');

// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// newFactory.generateCar();
// newFactory.generateCar();
// newFactory.generateCar();
// newFactory.generateCar();

// console.log(newFactory.findCar(3))
// console.log(porche);

class Person{
    static eyeColors(){
        return ['blue', 'green', 'brown']
    }
}

class SuperHero extends Person{

}

const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black'); 

console.log(Person.eyeColors()[0]);