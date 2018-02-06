import _ = require("../index");

declare namespace Lodash {
    interface BindAll {
        (): BindAll;
        (...methodNames: Array<_.Many<string>>): BindAll1x1<T>;
        <T>(...methodNames: Array<_.Many<string>>, object: T): T;
    }
    interface BindAll1x1<T> {
        (): BindAll1x1<T>;
        (object: T): T;
    }
}

declare const bindAll: Lodash.BindAll;
export = bindAll;
