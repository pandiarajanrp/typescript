class Vehichle {
    protected start(): void {
        console.log('Vehicle started')
    }
    stop(): void {
        console.log('Vehicle stopped')
    }
    drive(): void {
        console.log('Vehicle drove')
    }
    private key(): void {
        console.log('Insert key')
    }
}

class Bike extends Vehichle {
    start(): void {
        // this.key();  // throw error because we cant call key
        console.log('Bike stated')
    }
}

const activa = new Bike();
activa.start();

const vehicle = new Vehichle();
vehicle.start(); // throw error because 'start' is protected and only accessible within class 'Vehichle' and its subclasses