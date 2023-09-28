import jsan = require("jsan");

const options: jsan.Options = {
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
    circular: "[CIRCULAR]",
};

declare const data: unknown;

const stringified = jsan.stringify(
    data,
    undefined,
    undefined,
    options,
);

const parsed = jsan.parse(
    stringified,
    undefined,
);
