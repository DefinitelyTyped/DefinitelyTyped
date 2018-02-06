import _ = require("../index");

declare namespace Lodash {
    interface Update {
        (): Update;
        (updater: (value: any) => any): Update1x1;
        (updater: (value: any) => any, object: object): Update1x2;
        (updater: (value: any) => any, object: object, path: _.PropertyPath): any;
    }
    interface Update1x1 {
        (): Update1x1;
        (object: object): Update1x2;
        (object: object, path: _.PropertyPath): any;
    }
    interface Update1x2 {
        (): Update1x2;
        (path: _.PropertyPath): any;
    }
}

declare const update: Lodash.Update;
export = update;
