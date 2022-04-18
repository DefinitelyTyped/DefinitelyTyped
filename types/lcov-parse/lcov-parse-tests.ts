import parse = require('lcov-parse');

const sample = `TN:
SF:src/most.js
FN:1,sum
FN:5,product
FNF:2
FNH:1
FNDA:1,sum
FNDA:0,product
DA:2,1
DA:6,0
DA:9,1
LF:3
LH:2
BRF:0
BRH:0
end_of_record`;

parse('', (err, data) => {
    err; // $ExpectedType string
    data; // $ExpectedType undefined
});

parse(sample, (err, data) => {
    err; // $ExpectedType null
    data; // $ExpectedType LcovFile[]
});

parse.source('', (err, data) => {
    err; // $ExpectedType string
    data; // $ExpectedType undefined
});

parse.source(sample, (err, data) => {
    err; // $ExpectedType null
    data; // $ExpectedType LcovFile[]
});
