import objectMap = require('object-map');

const obj = {foo: 7, bar: 3, baz: -1};

let total = 0;
const keys: string[] = [];
objectMap(obj, (val, key) => {
    total += val;
    keys.push(key);
});

const myThis = {
    mul: 2,
    count: 0,
};
objectMap(obj, function(val, key) {
    this.count += this.mul * val;
}, myThis);
