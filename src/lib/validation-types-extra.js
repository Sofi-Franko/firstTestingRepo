function string(val) {
    return typeof val === 'string'
}
function number(val) {
    return typeof val === 'number'
}
function any() {
    return true
}
function shape(obj) {
    if (typeof obj === 'object') return obj
    else return null
}

module.exports = {
    string,
    number,
    any,
    shape
};