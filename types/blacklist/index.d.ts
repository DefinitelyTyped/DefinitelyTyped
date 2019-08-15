// Type definitions for blacklist 1.1
// Project: https://github.com/dcousens/blacklist
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = blacklist;
declare function blacklist(src: any, ...args: string[]): any;
declare function blacklist(src: any, spec: { [x: string]: boolean }): any;
