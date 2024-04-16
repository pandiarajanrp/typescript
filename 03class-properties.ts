class Vehichle {
    constructor(public color: string) {
        console.log('Start 1');
    }
}

const veh = new Vehichle("red");
console.log(veh.color);

class Vehichle2 {
    constructor(protected color?: string) {
        console.log('Start 2');
    }
}

const veh2 = new Vehichle2("orange");
//console.log(veh2.color); // throws error because the color is protected property and accessible only inside or extended class

class Van extends Vehichle2 {
    constructor(public color?: string) {
        super(color);
        console.log(this.color);
    }
}

const van = new Van();
console.log(van.color);