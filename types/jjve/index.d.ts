import jjv = require("jjv");

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
