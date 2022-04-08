import jsan = require('jsan');

const options = {
    refs: false,
    date: true,
    function: true,
    regex: true,
    undefined: true,
    error: true,
    symbol: true,
    map: true,
    set: true,
    nan: true,
    infinity: true,
};

declare const data: unknown;

const stringified = jsan.stringify(
    data,
    undefined,
    undefined,
    options
);

const parsed = jsan.parse(
    stringified,
    undefined
);
