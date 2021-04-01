const warehouse = require("./warehouse");

function CarFactory(power = 10) {
    this.power = power;
    this.warehouse = warehouse;

    this.produceCar = function (color="red", wheels= 4, engine= false) {
        if(this.power < 2) return null
        else {
            this.power -= 2;

            const newCarObj = {id: this.warehouse.nextIdentifier++, color, wheels, engine};
            this.warehouse.createdCars.push(newCarObj);

            return newCarObj
        }

    }

    this.addEnergyPower = function (value= 0) {
        this.power += value;
    }

    this.changeCarColor = function (car, newColor = 'blue') {
        if(this.power < 1) return null
        else {
            this.power--;
            car.color = newColor;
            return car
        }
    }
}

module.exports = CarFactory;


