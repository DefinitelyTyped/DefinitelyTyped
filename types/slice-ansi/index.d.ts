/**
 * Slice a string with ANSI escape codes
 * @param input string with ANSI escape codes. Like one styled by chalk
 * @param beginSlice Zero-based index at which to begin the slice
 * @param [endSlice] Zero-based index at which to end the slice
 */
export default function sliceAnsi(input: string, beginSlice: number, endSlice?: number): string;
