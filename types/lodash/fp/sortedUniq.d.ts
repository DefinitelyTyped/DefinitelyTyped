import _ = require("../index");

declare namespace Lodash {
    interface SortedUniq {
        (): SortedUniq;
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const sortedUniq: Lodash.SortedUniq;
export = sortedUniq;
