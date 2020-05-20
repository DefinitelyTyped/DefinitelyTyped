// Type definitions for JJVE v0.4.0
// Project: https://github.com/silas/jjve
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import jjv = require('jjv');

declare function jjve(jjv: jjv.Env): jjve.Env;
declare namespace jjve {
    interface Issue {
        code: string;
        message: string;
        data: any;
        path: string;
    }

    interface Env {
        (schema: Object, data: any, errors: jjv.Errors): Issue[];
    }
}

export = jjve;
