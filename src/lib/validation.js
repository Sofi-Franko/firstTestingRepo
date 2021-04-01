function validate(schema, values) {
    const invalidKeysArr = [];
    Object.keys(schema).forEach(key => {
        if (!schema[key](values[key])) invalidKeysArr.push(key)
    })
    return invalidKeysArr
}

module.exports = {validate}