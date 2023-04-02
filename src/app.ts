// create an abstract class Vehicle for rental system

abstract class Vehicle {
    // apply access modifiers to instance variables
    private make: string;
    private model: string;
    private year: number;
    private rented: Boolean;

    constructor(
        make: string,
        model: string,
        year: number,
        rented: Boolean,
    ) {
        this.make = make,
            this.model = model,
            this.year = year,
            this.rented = rented
    }

    get getMake() {
        return this.make;
    }

    get getModel() {
        return this.model;
    }

    get getYear() {
        return this.year;
    }

    get getRented() {
        return this.rented;
    }

    set setRented(rented: Boolean) {
        this.rented = rented;
    }

    abstract rentalRate(): number;

    rent(): string {
        if (this.getRented) {
            return `Sorry! ${this.make} ${this.model} is already rented`;
        }
        this.setRented = true;
        return `${this.make} ${this.model} is now rented`;
    }

    return(): string {
        if (this.getRented) {
            this.setRented = false;
            return `${this.make} ${this.model} is now returned`;
        }
        return `${this.make} ${this.model} is not rented yet`;
    }
}



class Car extends Vehicle {
    private rentRate: number;
    private numberOfDoors: number;
    private automatic: Boolean;


    constructor(
        make: string,
        model: string,
        year: number,
        rented: Boolean,
        rentRate: number,
        numberOfDoors: number,
        automatic: Boolean
    ) {
        super(make, model, year, rented);
        this.rentRate = rentRate;
        this.numberOfDoors = numberOfDoors;
        this.automatic = automatic;
    }

    rentalRate() {
        return this.rentRate;
    }

    get getNumberOfDoors() {
        return this.numberOfDoors;
    }

    get getAutomatic() {
        return this.automatic;
    }

    set setAutomatic(automatic: Boolean) {
        this.automatic = automatic;
    }

}

class Truck extends Vehicle {
    private rentRate: number;
    private numberOfAxles: number;
    private towingCapacity: number;

    constructor(
        make: string,
        model: string,
        year: number,
        rented: Boolean,
        rentRate: number,
        numberOfAxles: number,
        towingCapacity: number
    ) {
        super(make, model, year, rented);
        this.rentRate = rentRate;
        this.numberOfAxles = numberOfAxles;
        this.towingCapacity = towingCapacity;
    }

    rentalRate() {
        return this.rentRate;
    }

    get getNumberOfAxles() {
        return this.numberOfAxles;
    }

    get getTowingCapacity() {
        return this.towingCapacity;
    }

    set setTowingCapacity(towingCapacity: number) {
        this.towingCapacity = towingCapacity;
    }

}

class Motorcycle extends Vehicle {
    private rentRate: number;
    private hasSideCar: Boolean;
    constructor(
        make: string,
        model: string,
        year: number,
        rented: Boolean,
        rentRate: number,
        hasSideCar: Boolean
    ) {
        super(make, model, year, rented);
        this.rentRate = rentRate;
        this.hasSideCar = hasSideCar;
    }

    rentalRate() {
        return this.rentRate;
    }

    get getHasSideCar() {
        return this.hasSideCar;
    }

    set setHasSideCar(hasSideCar: Boolean) {
        this.hasSideCar = hasSideCar;
    }
}


const car1 = new Car('Toyota', 'Camry', 2018, false, 100, 4, true);
const truck1 = new Truck('Ford', 'F150', 2018, false, 150, 2, 5000);
const motorcycle1 = new Motorcycle('Harley-Davidson', 'Sportster', 2018, false, 50, false);

// test the rent() and return() methods to make sure they work as expected.

console.log("**************CAR**************");

console.log(car1.rent());
console.log(car1.rent());
console.log(car1.return());
console.log(car1.rent());

console.log("**************TRUCK**************");

console.log(truck1.return());
console.log(truck1.rent());
console.log(truck1.rent());
console.log(truck1.return());
console.log(truck1.rent());

console.log("**************MOTORCYCLE**************");
console.log(motorcycle1.rent());
console.log(motorcycle1.rent());
console.log(motorcycle1.return());
console.log(motorcycle1.return());
console.log(motorcycle1.rent());


console.log("**************ALL RENTAL RATE**************");

console.log(`Rental rate of ${car1.getMake} ${car1.getModel} =`, car1.rentalRate());
console.log(`Rental rate of ${truck1.getMake} ${truck1.getModel} =`, truck1.rentalRate());
console.log(`Rental rate of ${motorcycle1.getMake} ${motorcycle1.getModel} =`, motorcycle1.rentalRate());
