import implementation = require("./implementation");

type Implementation = typeof implementation;

interface OwnKeys {
    <T extends object>(object: T): Array<keyof T>;
    getPolyfill(): Implementation;
    implementation: Implementation;
    shim(): Implementation;
}

declare const ownKeys: OwnKeys;
export = ownKeys;
