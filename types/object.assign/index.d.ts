import implementation = require("./implementation");

type Implementation = typeof implementation;

interface Assign {
    getPolyfill(): Implementation;
    implementation: Implementation;
    shim(): Implementation;
}

declare const assign: typeof Object.assign & Assign;
export = assign;
