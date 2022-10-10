import isMap = require("is-map");

const tests = () => {
    !isMap(function () {})
    isMap(Symbol("foo"))
}
