class Vehicle {
  start(): void {
    console.log("Vehichle started")
  }
  stop(): void {
    console.log('Vehicle Stopped.')
  }
}

const car = new Vehicle();
car.start();
car.stop();
