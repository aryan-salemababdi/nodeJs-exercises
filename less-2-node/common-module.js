const name = "aryan"; // export defult (if dont use exports) "aryan"

const add =  (a,b) => {
    const c = a + b;
    return c;
}

module.exports = {
    add,
    name
}