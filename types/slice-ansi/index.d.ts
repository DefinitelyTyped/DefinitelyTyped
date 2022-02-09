// Type definitions for slice-ansi 5.0
// Project: https://github.com/chalk/slice-ansi#readme
// Definitions by: Dan Imhoff <https://github.com/dwieeb>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Slice a string with ANSI escape codes
 * @param input string with ANSI escape codes. Like one styled by chalk
 * @param beginSlice Zero-based index at which to begin the slice
 * @param [endSlice] Zero-based index at which to end the slice
 */
export default function sliceAnsi(input: string, beginSlice: number, endSlice?: number): string;
