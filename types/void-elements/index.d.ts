// Type definitions for void-elements 3.1
// Project: https://github.com/jadejs/void-elements
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface VoidElements {
    readonly [tagname: string]: true;
}
declare const voidElements: Partial<VoidElements>;
export = voidElements;
