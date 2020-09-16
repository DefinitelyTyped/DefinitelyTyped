import prepare = require('mocha-prepare');

prepare(
    done => {
        done();
    },
    done => {
        done();
    },
);

prepare(done => {
    done();
});
