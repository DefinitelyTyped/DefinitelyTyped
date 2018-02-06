import _ = require("../index");

declare namespace Lodash {
    interface UnionWith {
        (): UnionWith;
        <T>(arrays2: _.List<T> | null | undefined): UnionWith1x1<T>;
        <T>(arrays2: _.List<T> | null | undefined, comparator: _.Comparator<T>): UnionWith1x2<T>;
        <T>(arrays2: _.List<T> | null | undefined, comparator: _.Comparator<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface UnionWith1x1<T> {
        (): UnionWith1x1<T>;
        (comparator: _.Comparator<T>): UnionWith1x2<T>;
        (comparator: _.Comparator<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface UnionWith1x2<T> {
        (): UnionWith1x2<T>;
        (arrays: _.List<T> | null | undefined): T[];
    }
}

declare const unionWith: Lodash.UnionWith;
export = unionWith;
