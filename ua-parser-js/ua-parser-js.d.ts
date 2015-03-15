// Type definitions for ua-parser.js v0.7.3
// Project: https://github.com/faisalman/ua-parser-js
// Definitions by: Marco Talento <https://github.com/Talento90>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface Browser {
    name: string;
    major: number;
    version: string;
}

interface Device {
    model: string;
    type: string;
    vendor: string;
}

interface Engine {
    name: string;
    version: string;
}

interface OS {
    name: string;
    version: string;
}

interface CPU {
    architecture: string;
}

interface Result {
    ua: string;
    browser: Browser;
    device: Device;
    cpu: CPU;
    engine: Engine;
    os: OS;
}

interface UAParser {
    new (ua?: string, extensions?: any): UAParser;
    getBrowser(): Browser;
    getDevice(): Device;
    getEngine(): Engine;
    getOS(): OS;
    getCPU(): CPU;
    getResult(): Result;
    getUA(): string;
    setUA(ua: string): void;
}

declare var uaParser: UAParser;

declare module 'ua-parser' {
    export = uaParser;
}
