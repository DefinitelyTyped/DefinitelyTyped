import looper = require('looper');

let l = 100000;
const next = looper(() => {
    if (--l) next();
});

next();
