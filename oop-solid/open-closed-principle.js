class Vehicle {
  getWheels() {
    return 0
  }
}

class Bike extends Vehicle {
  getWheels() {
    return 2
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4
  }
}

function vehicleWheels(vehicles) {
  vehicles.map(v => console.log(v.getWheels()));
}

const myVehicle = new Car()
const myVehicle2 = new Bike()
const myVehicle3 = new Vehicle()

vehicleWheels([ myVehicle, myVehicle2, myVehicle3 ])

myVehicle.getWheels() // 4
myVehicle2.getWheels() // 2