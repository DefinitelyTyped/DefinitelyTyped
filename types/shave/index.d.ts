// Type definitions for shave v2.4.0
// Project: https://github.com/dollarshaveclub/shave
// Definitions by: Daniel Rivera <https://github.com/danyfu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
* Truncates multi-line text to fit within an html element based on a set max-height. 
* It then stores the diff of the original text string in a hidden <span> element following the visible text. 
* This means the original text remains intact!
*/
export default function shave(
    target: string | Element | Element[],
    maxHeight: number,
    options?: Shave.Options
): Shave;

export interface Shave {
}

export namespace Shave {
    export interface Options {
        classname?: string,
        character?: string,
        spaces?: boolean
    }
}