// Type definitions for obj-str 1.0
// Project: https://github.com/lukeed/obj-str#readme
// Definitions by: Sascha Englert <https://github.com/saenglert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = objstr;

declare function objstr(obj: { [name: string]: boolean }): string;
