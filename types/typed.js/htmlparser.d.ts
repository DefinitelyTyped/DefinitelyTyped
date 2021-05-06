import Typed from "./index";

export class HTMLParser {
    /**
     * Type HTML tags & HTML Characters
     * @param curString Current string
     * @param curStrPos Position in current string
     * @param self instance of Typed
     * @returns  a new string position
     */
    typeHtmlChars: (curString: string, curStrPos: number, self: Typed) => number;

    /**
     * Backspace HTML tags and HTML Characters
     * @param curString Current string
     * @param curStrPos Position in current string
     * @param self instance of Typed
     * @returns  a new string position
     */
    backSpaceHtmlChars: (curString: string, curStrPos: number, self: Typed) => number;
}
