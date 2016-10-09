// Type definitions for linq.jquery (from linq.js)
// Project: https://linqjs.codeplex.com/
// Definitions by: neuecc <https://www.codeplex.com/site/users/view/neuecc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>
/// <reference path="index.d.ts"/>

declare module linqjs {
    interface IEnumerable<T> {
        tojQuery(): JQuery;
        tojQueryAsArray(): JQuery;
    }
}

interface JQuery {
    toEnumerable(): linqjs.IEnumerable<JQuery>;
}
