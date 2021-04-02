class Person {
    constructor(state = 'active', uid = '0-0') {
        this.state = state;
        this.uid = uid;
        Person.classesCounter+=1;
    }

    getState() {return this.state}
    setState(newValue) {
        if (newValue === 'active' || newValue === 'inactive') this.state = newValue
        else throw new Error('State must be active or inactive')
    }

    getUid() {return this.uid}

    static getCountOfPersons() {return Person.classesCounter}
}
Person.classesCounter = 0;

module.exports = Person
