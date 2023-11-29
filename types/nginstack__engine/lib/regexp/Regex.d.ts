export = Regex;
declare function Regex(
    pattern: string,
    options?: {
        patternSyntax?: number;
        ignoreCase?: boolean;
        dotAll?: boolean;
        multiline?: boolean;
    }
): void;
declare class Regex {
    constructor(
        pattern: string,
        options?: {
            patternSyntax?: number;
            ignoreCase?: boolean;
            dotAll?: boolean;
            multiline?: boolean;
        }
    );
    caseSensitivity: number;
    pattern: string;
    readonly patternSyntax: number;
    dotAll: boolean;
    multiline: boolean;
    cap(matchedIndex: number): string;
    captureCount(): number;
    capturedTexts(): string[];
    getErrorString(): string;
    exactMatch(str: string): boolean;
    indexIn(str: string, offSet?: number, caretMode?: number): number;
    isEmpty(): boolean;
    isMinimal(): boolean;
    isValid(): boolean;
    matchedLength(): number;
    pos(n: number): number;
    setMinimal(isMinimal: boolean): void;
}
declare namespace Regex {
    let CASE_INSENSITIVE: number;
    let CASE_SENSITIVE: number;
    let CARET_AT_ZERO: number;
    let CARET_AT_OFFSET: number;
    let CARET_WONT_MATCH: number;
    let SYNTAX_REG_EXP: number;
    let SYNTAX_WILDCARD: number;
    let SYNTAX_FIXED_STRING: number;
    let SYNTAX_REG_EXP2: number;
    let SYNTAX_REG_EXP3: number;
    let SYNTAX_WILDCARD_UNIX: number;
    let SYNTAX_W3C_XML_SCHEMA_11: number;
    function escape(str: string): string;
}
