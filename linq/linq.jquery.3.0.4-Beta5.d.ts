// Type definitions for linq.jquery (from linq.js)
// Project: https://linqjs.codeplex.com/
// Definitions by: neuecc <https://www.codeplex.com/site/users/view/neuecc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="linq.d.ts"/>

declare module linqjs {
    interface IEnumerable<T> {
        tojQuery(): JQuery;
        tojQueryAsArray(): JQuery;
    }
}

interface JQuery {
    toEnumerable(): linqjs.IEnumerable<JQuery>;
}
