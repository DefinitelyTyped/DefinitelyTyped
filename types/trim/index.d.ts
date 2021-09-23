// Type definitions for trim 0.01
// Project: https://www.npmjs.com/package/trim
// Definitions by: Steve Jenkins <https://github.com/skysteve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function Trim(str: string): string;
declare namespace Trim {
    function left(str: string): string;
    function right(str: string): string;
}

export = Trim;
