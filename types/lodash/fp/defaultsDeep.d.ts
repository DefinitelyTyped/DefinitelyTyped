import _ = require("../index");

declare namespace Lodash {
    interface DefaultsDeep {
        (): DefaultsDeep;
        (...sources: any[]): DefaultsDeep1x1;
        (...sources: any[], object: any): any;
    }
    interface DefaultsDeep1x1 {
        (): DefaultsDeep1x1;
        (object: any): any;
    }
}

declare const defaultsDeep: Lodash.DefaultsDeep;
export = defaultsDeep;
