// Type definitions for npm-cache-filename 1.0
// Project: https://github.com/npm/npm-cache-filename
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function cf(root: string): (url: string) => string;
declare function cf(root: string, url: string): string;

export = cf;
