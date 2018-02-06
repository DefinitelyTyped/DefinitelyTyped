import _ = require("../index");

declare namespace Lodash {
    interface ZipObjectDeep {
        (): ZipObjectDeep;
        (values: _.List<any>): ZipObjectDeep1x1;
        (values: _.List<any>, paths: _.List<_.PropertyPath>): object;
    }
    interface ZipObjectDeep1x1 {
        (): ZipObjectDeep1x1;
        (paths: _.List<_.PropertyPath>): object;
    }
}

declare const zipObjectDeep: Lodash.ZipObjectDeep;
export = zipObjectDeep;
