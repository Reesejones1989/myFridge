// let printbox = () => {
    
//     for (let y = 0; y <10; y++){
//         let boxStrip = "";
        
//         for (let x = 0; x <10; x++){
//         boxStrip =  boxStrip + '#"';
//         }
//         console.log(boxStrip)
//     }
// }

// let buildBoxStrip = (boxChar, length) => {
//     let boxStrip = "";
//     for (let i = 0; i <length; i++){
//         boxStrip = boxStrip + boxChar;
//     }
// };

// buildBoxStrip('*',23)

// width = 5
// height = 5

// function computerArea(width,height){
//     // width = 10
//     // height = 10

//     area = width * height
    
//     return ("The area of a rectangle with a width of" + width + "and a height of" + height + "is" + area + "square units")
// }
// console.log(computerArea(10,10))



//  const planetHasWater = (planet) => {
//     if (planet === 'Earth' || planet  === 'Mars'){
//         return true;
//  }
//     else{
//         return false;
//     }
// }
// console.log(planetHasWater('Mars'));
// console.log(planetHasWater('Earth'))
// console.log(planetHasWater('Jupiter'))

// function getDevObject(name, ...skills){
//     // console.log(name);
//     // console.log(skills);
//     return{
//         devname: name,
//         jobSkills: skills,
//     }
// }
// console.log(getDevObject("Jackie",  "HTML", "CSS", 'PHP'))

// function makePerson(name, age =-99){
//     return{name: name, age: age}
// }
// console.log (makePerson('Jackson', 23))


const arr = ["a", "b", "c", "d"];

const newFunction = () => {
    console.log("Hello World");
}
arr.forEach((item) => {
    console.log(item);
});

let x =15
const func1= () => {
    x=15
}


