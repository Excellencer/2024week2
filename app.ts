let greeting:  string = ("Hello World!")
console.log(greeting)


type TVehicle = {
    model: string;
    color: string;
    year: number;
    power: number;
};
   
const vehicle1: TVehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};

console.log(vehicle1)

interface IVehicle  {
    model: string;
    color: string;
    year: number;
    power: number;
};

interface ICar extends IVehicle {
    bodyType: string;
    wheelCount: number;
};

interface IBoat extends IVehicle {
    draft: number;
};

interface IPlane extends IVehicle {
    wingspan: number;
};

const car1: ICar = { 
    model: "Ford focus", 
    color: "Green", 
    year: 2016, 
    power: 150, 
    bodyType: "Hatchback", 
    wheelCount: 4 
} 

const plane1: IPlane = { 
    model: "Boeing 777", 
    color: "White", 
    year: 2020, 
    power: 170000, 
    wingspan: 65 
} 

const boat1: IBoat = { 
    model: "Bella", 
    color: "Black", 
    year: 2022, 
    power: 100, 
    draft: 0.42 
}

console.log(car1, plane1, boat1)


class VehicleService<T> {
    private items: T[] = [];
    public add(item:T): void {
        this.items.push(item);
      };
    public list(): T[] {
    return this.items;
    };
  }
   
let carList = new VehicleService<ICar>();
let boatList = new VehicleService<IBoat>();

carList.add(car1);
boatList.add(boat1);

console.log(carList.list(), boatList.list());

