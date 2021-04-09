import arrayFindIndex = require("array-find-index");

arrayFindIndex(['typescript', 'javascript', 'python'], x => x === 'javascript');

const ctx = {foo: 'typescript'};
arrayFindIndex(['typescript', 'javascript', 'python'], function(x) {
    return x === this.foo;
}, ctx);
