/*
You're tasked with modeling vehicles and cars in a transportation app:
    - A Vehicle has type and speed properties.
    - All vehicles can start and stop.
    - A Car inherits from Vehicle and has an additional drive method.

    a- Implement this using ES6 classes
     - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
     - the implementation of the methods can be console.log only or you can leave them empty
 
    b- Write a function that checks whether an object is an instance of Car using two different ways
*/
class Vehicle{
    static counter =0;
    
    constructor(speed, type){
        if (Vehicle.counter>=50){
            throw new Error("Veihcle Insted Limited")
        }
        this.speed = speed;
        this.type = type;
        Vehicle.counter++;
    }
   
    start(){
        console.log(`${type} is start`);
    }
    stop(){
        console.log(`${type} is start`);
    } 
}
class Car extends Vehicle{
    constructor(drive){
        super();
        this.drive = drive;
    }
    drive(){
        console.log('Driver drive the car');
    }
}
function isCarInstance(obj){
    const check1 = obj.constructor === Car;
    const check2 = obj.__proto__ === Car.prototype;
     return`Check using constructor -> ${check1} \n Check using .__proto__: -> ${check2} \n`;
}

try {
    const car1 = new Car('Sedan', 120);
    console.log(isCarInstance);
    
    console.log('Is car1 a Car instance?'+ '\n', isCarInstance(car1));
    console.log(car1);
    car1.start();
    car1.stop();
    car1.drive();
    console.log('Vehicle instance count:',  Vehicle.counter);  //1


    const vehicle1 = new Vehicle('Truck', 80);
    console.log('Is vehicle1 a Car instance?'+'\n', isCarInstance(vehicle1)); //2
    console.log(vehicle1);
    vehicle1.start();
    vehicle1.stop();

    //vehicle1.drive();// throw not a function in veihcle
    console.log('Vehicle instance count:', Vehicle.counter);
    
    for (let i = 0; i < 50; i++) {  //create 50 instance of veihcle
        new Vehicle('Car' + i, 100);
    }
    console.log('Vehicle instance count: ',  Vehicle.counter);  //52 throw limted
} catch (error) {
    console.error(error.message);
}
