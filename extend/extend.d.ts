// Type definitions for Node.js v0.12.0
// Project: http://nodejs.org/
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyType
declare module "extend" {

    function extend(deepOrObject:boolean | Object, ...objectN: Object[]): any;
    export = extend;
}