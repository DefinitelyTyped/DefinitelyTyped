// Type definitions for tmpl 1.0
// Project: https://github.com/daaku/nodejs-tmpl
// Definitions by: Saeed Seyfi <https://github.com/saeedseyfi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function tmpl(string: string): (args: object) => string;
declare function tmpl(string: string, args: object): string;
export = tmpl;
