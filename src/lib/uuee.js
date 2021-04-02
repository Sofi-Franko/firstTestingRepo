const Person = require('./person');
const Human = require('./human');

class UuEE extends Person {
    constructor(owner, state, uid) {
        console.log("owner", owner)
        super(state, uid);
        this.ownerName = owner;
    }

    sayHello(caller) {
        if(caller === this.ownerName) return `Hello ${this.ownerName.humanName}.`
        else return 'No!'
    }
}

module.exports = UuEE