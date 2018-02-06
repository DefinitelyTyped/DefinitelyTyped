import _ = require("../index");

declare namespace Lodash {
    interface Intersection {
        (): Intersection;
        <T>(...arrays: Array<_.List<T>>): T[];
    }
}

declare const intersection: Lodash.Intersection;
export = intersection;
