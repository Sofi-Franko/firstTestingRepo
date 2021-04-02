const Person = require('./person');

class Human extends Person {
    constructor(name, age, state, uid) {
        super(state, uid);

        this.humanName = name;
        this.age = age;
    }

    getName() {return this.humanName}
    sayHello() {return `Hello from: ${this.humanName}.`}

}

module.exports = Human