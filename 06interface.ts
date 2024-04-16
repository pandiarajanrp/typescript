interface Vehicle {
  name: string;
  model: string;
  year: number;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const seltos = {
  name: 'KIA Seltos',
  model: 'Seltos',
  year: 2023,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

printVehicle(seltos);
