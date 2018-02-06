import _ = require("../index");

declare namespace Lodash {
    interface FromPairs {
        (): FromPairs;
        <T>(pairs: _.List<[_.PropertyName, T]> | null | undefined): _.Dictionary<T>;
        (pairs: _.List<any[]> | null | undefined): _.Dictionary<any>;
    }
}

declare const fromPairs: Lodash.FromPairs;
export = fromPairs;
