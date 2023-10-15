// Type definitions for blueimp-md5 2.18
// Project: https://github.com/blueimp/JavaScript-MD5
// Definitions by: Ray Martone <https://github.com/rmartone>
//                 Mikael Kohlmyr <https://github.com/mkohlmyr>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function md5(value: string, key?: string | null, raw?: boolean): string;

export as namespace md5;
export = md5;
