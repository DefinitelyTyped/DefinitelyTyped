import _ = require("../index");

declare namespace Lodash {
    interface Unzip {
        (): Unzip;
        <T>(array: T[][] | _.List<_.List<T>> | null | undefined): T[][];
    }
}

declare const unzip: Lodash.Unzip;
export = unzip;
