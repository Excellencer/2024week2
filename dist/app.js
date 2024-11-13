"use strict";
let greeting = ("Hello World!");
console.log(greeting);
const vehicle1 = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log(vehicle1);
;
;
;
;
const car1 = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
const plane1 = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65
};
const boat1 = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log(car1, plane1, boat1);
class VehicleService {
    items = [];
    add(item) {
        this.items.push(item);
    }
    ;
    list() {
        return this.items;
    }
    ;
}
const carList = new VehicleService();
const boatList = new VehicleService();
carList.add(car1);
boatList.add(boat1);
console.log(carList.list(), boatList.list());
