import arrayFindIndex = require("array-find-index");

arrayFindIndex(['rainbow', 'unicorn', 'pony'], x => x === 'unicorn');

const ctx = {foo: 'rainbow'};
arrayFindIndex(['rainbow', 'unicorn', 'pony'], function(x) {
    return x === this.foo;
}, ctx);
