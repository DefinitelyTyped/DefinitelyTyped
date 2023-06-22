import isMap = require('is-map');

const tests = () => {
    !isMap(new Set());
    isMap(Symbol('foo'));
};
