

class Vehicle{
    constructor(vin,make,model){
    this.vin = vin;
    this.make = make;
    this.model= model;
    this.running = false;
    }

   



start(){
this.running = false;
console.log("stopping...");
}


// start() {
// this.running = true;
// console.log('running...');
}

const v1 = new Vehicle("X123Y", "Boeing");
const v2 = new Vehicle();
const v3 = new Vehicle();
console.log("passed through")