import rn = require('random-number');

rn();

const options1 = {
    min: -1000,
    max: 1000,
    integer: true
};
rn(options1);

const gen1 = rn.generator({
    min: -1000,
    max: 1000,
    integer: true
});
gen1();

const gen2 = rn.generator({
    min: -1000,
    max: 1000,
    integer: true
});
gen2(500);
gen2(500, null, false);

const options3 = {
    min: 9874316514
};
rn(options3);

const options4 = {
    max: -9874316514
};
rn(options4);

const options5 = {
    integer: true
};
rn(options5);

const options6 = {
    min: -10,
    max: -1
};
rn(options6);

const options7 = {
    min: 1000,
    integer: true
};
rn(options7);

const options8 = {
    max: 1000,
    integer: true
};
rn(options8);
