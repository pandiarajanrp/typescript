class Vehichle {
    start(): void {
        console.log('Vehicle started')
    }
    stop(): void {
        console.log('Vehicle stopped')
    }
    drive(): void {
        console.log('Vehicle drove')
    }
}

class Bike extends Vehichle {
    drive(): void {
        console.log('Bike drove')
    }
}

const activa = new Bike();
activa.drive();
activa.start();