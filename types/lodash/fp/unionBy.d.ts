import _ = require("../index");

declare namespace Lodash {
    interface UnionBy {
        (): UnionBy;
        <T>(arrays2: _.List<T> | null | undefined): UnionBy1x1<T>;
        <T>(arrays2: _.List<T> | null | undefined, iteratee: _.ValueIteratee<T>): UnionBy1x2<T>;
        <T>(arrays2: _.List<T> | null | undefined, iteratee: _.ValueIteratee<T>, arrays1: _.List<T> | null | undefined): T[];
    }
    interface UnionBy1x1<T> {
        (): UnionBy1x1<T>;
        (iteratee: _.ValueIteratee<T>): UnionBy1x2<T>;
        (iteratee: _.ValueIteratee<T>, arrays1: _.List<T> | null | undefined): T[];
    }
    interface UnionBy1x2<T> {
        (): UnionBy1x2<T>;
        (arrays1: _.List<T> | null | undefined): T[];
    }
}

declare const unionBy: Lodash.UnionBy;
export = unionBy;
