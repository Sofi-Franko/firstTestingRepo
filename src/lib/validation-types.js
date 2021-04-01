function string(val) {
    return typeof val === 'string'
}
function number(val) {
    return typeof val === 'number'
}
function any() {
    return true
}

module.exports = {
    string,
    number,
    any
};

