// Type definitions for htmlescape 1.1
// Project: https://github.com/zertosh/htmlescape
// Definitions by: bouzuya <http://bouzuya.net>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function htmlescape(o: any): string;
declare namespace htmlescape {
    function sanitize(s: string): string;
}

export = htmlescape;
export as namespace htmlescape;
