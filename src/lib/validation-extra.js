function validate(schema, values, keysStringFlag = '') {
    const invalidKeysArr = [];
    Object.keys(schema).forEach(key => {
        console.log(`$.${keysStringFlag+key}`)
        // function repeatValidate(newScheme, newValues, pushKey) {
        //     validate(newScheme, newValues)
        // }
        // if (!keysStringFlag) {
        //     keysStringFlag = `$.${key}`
        //     console.log('KEY ---> ', keysStringFlag)
        // } else {
        //     keysStringFlag += `.${key}`;
        //     console.log('KEY obj ---> ', keysStringFlag)
        // }

        if (typeof values[key] === 'object') {
            // console.log('OBJ ---> ',keysStringFlag)
            validate(schema[key], values[key], keysStringFlag+key)


            // for (let prop in values[key]) {
            //     if (typeof values[key][prop] === "object") {
            //         validate(schema[key][prop], values[key][prop]);
            //     } else {
            //         console.log(keysStringFlag)
            //         validate(schema[key], values[key])
            //     }
            // }

            // for (let prop in values[key]) {
            //     if (typeof values[prop] === 'object') {
            //         shapeFunc(values[prop]);
            //     } else {
            //         invalidKeysArr.push(`$.${key}.${values[key][prop]}`)
            //     }
            // }
        } else {

            if (!schema[key](values[key])) {
                invalidKeysArr.push(`$.${keysStringFlag+key}`)
            }
        }
        // keysStringFlag = ''
    })
    return invalidKeysArr
}

module.exports = {validate}