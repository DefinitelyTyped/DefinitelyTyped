// Type definitions for extend v2.0.0
// Project: https://www.npmjs.com/package/extend
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module "extend" {

    function extend(deepOrObject:boolean | Object, ...objectN: Object[]): any;
    namespace extend {}
    export = extend;
}
