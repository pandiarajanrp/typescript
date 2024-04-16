// string
const firstName: string = "Welcome";

// number
const age: number = 20;

// typed array
const carMakers: string[] = ['ford', 'kia', 'bmw'];

// mixed/flexible array
const mixedData: (string | boolean)[] = ['jon herbst', true];

// void
const logger = (message: string): void => {
    console.log('print error message' + message);
}

// never
const throwError = (message: string): never => {
    throw new Error(message);
}