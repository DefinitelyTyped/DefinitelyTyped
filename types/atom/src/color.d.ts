/**
 *  A simple color class returned from Config::get when the value at the key path is
 *  of type 'color'.
 */
export interface Color {
    /** Returns a string in the form '#abcdef'. */
    toHexString(): string;

    /** Returns a string in the form 'rgba(25, 50, 75, .9)'. */
    toRGBAString(): string;
}
