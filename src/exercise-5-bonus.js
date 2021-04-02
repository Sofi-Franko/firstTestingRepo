/*
Create Factory class which will be able to produce instances of Human and Uuee
save all created instances into Factory
max amount of stored instances is 5, if the limit is reached: remove the oldest instance
- try to optimize this process

methods:
  static createInstance(className, [params])
  - first parameter is className: "Human" or "Uuee"
  - second parameter is array of params for or the appropriate class
      -> for example: [name, age, state, uid] or [owner, state, uid]

  static getInstance(uid)
  - return instance with passed uid if the instance exist otherwise throw exception

  static getListListOfInstances()
  - return array of stored instances
*/

const Human = require("./lib/human");
const Uuee = require("./lib/uuee");


class Factory {

    static validClasses (name, param) {
        let entity;
        if (name === 'Human') {
            entity = new Human(...param)
            Factory.instancesArr.push(entity)
        } else if (name === 'Uuee') {
            console.log("params", param)

            entity = new Uuee(...param)
            Factory.instancesArr.push(entity)
        }
        return entity
    }

    static createInstance(className, params) {
        if (Factory.instancesArr.length < 5) return Factory.validClasses(className, params)
        else {
            Factory.instancesArr.shift();
            return Factory.validClasses(className, params)
        }

    }

    static getInstance(uid) {

        let sdf;
        Factory.instancesArr.forEach(instance => {
            console.log("instance", instance)
            if (instance.uid === uid) sdf = instance.ownerName
            // else throw new Error()
        })
        console.log("sdf", sdf)
        return sdf
    }

    static getListListOfInstances() {
        return Factory.instancesArr}

}

Factory.instancesArr = [];


module.exports = Factory;



