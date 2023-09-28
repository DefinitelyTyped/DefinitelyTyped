// Type definitions for html-tag 2.0
// Project: https://www.npmjs.com/package/html-tag
// Definitions by: arnu515 <https://github.com/arnu515>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function tag(name: string, text?: string | false): string;
declare function tag(name: string, attribs?: Record<string, string | number | boolean>, text?: string | false): string;
export = tag;
