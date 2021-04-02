/*
use function "addGettersAndSetters" to add getters and setters for each key of the object in the array
add extra method getCountOfModification to each object which will
return count of used setters for that specific object

name ->  users[0].getName()
name -> users[0].setName(newValue)
*/


let users = [
    {
        name: "Peter",
        age: 32,
    },
    {
        name: "John",
        age: 15,
        random: 12345
    },
    {
        name: "Jim",
        age: 16,
        id: 15
    }
];

function addGettersAndSetters(obj) {
    obj._setterCounter = 0;
    obj.getCountOfModification = () => obj._setterCounter

    for (let key in obj) {
        const getMethod = 'get' + key.charAt(0).toUpperCase() + key.slice(1);
        const setMethod = 'set' + key.charAt(0).toUpperCase() + key.slice(1);

        obj[getMethod] = () => obj[key]
        obj[setMethod] = (newValue) => {
            obj._setterCounter++
            obj[key] = newValue
        }
    }
}

module.exports = addGettersAndSetters;

