const Person = require('./person');
const Human = require('./human');

class UuEE extends Person {
    constructor(owner, state, uid) {
        super(state, uid);
        this.ownerName = owner;

        if(!(owner instanceof Human)) throw new Error();
    }

    sayHello(caller) {
        if(caller === this.ownerName) return `Hello ${this.ownerName.humanName}.`
        else return 'No!'
    }
}

module.exports = UuEE