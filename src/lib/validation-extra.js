function validate(schema, values) {
    const invalidKeysArr = [];

    function recursiveValidation(newSchema, newValues, keysStringFlag = '') {
        Object.keys(newSchema).forEach(key => {
            console.log(`flag -> $.${keysStringFlag + key}`)
            if (typeof newValues[key] === 'object')
                recursiveValidation(newSchema[key], newValues[key], keysStringFlag + key + '.')
            else {
                if (!newSchema[key](newValues[key])) invalidKeysArr.push(`$.${keysStringFlag + key}`)
            }
        })
    }

    recursiveValidation(schema, values)
    return invalidKeysArr
}

module.exports = {validate}