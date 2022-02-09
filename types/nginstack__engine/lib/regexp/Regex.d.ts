export = Regex;
declare function Regex(pattern: string, sensitivity: number | null, syntax: number | null): void;
declare class Regex {
    constructor(pattern: string, sensitivity: number | null, syntax: number | null);
    cap(matchedIndex: number): string;
    captureCount(): number;
    capturedTexts(): string[];
    getCaseSensitivity(): number;
    setCaseSensitivity(constCaseSensitive: any): void;
    getErrorString(): string;
    exactMatch(str: string): boolean;
    indexIn(str: string, offSet: number | null, caretMode: number | null): number;
    isEmpty(): boolean;
    isMinimal(): boolean;
    isValid(): boolean;
    lastIndexIn(str: string, offSet: number, caretMode: number): number;
    matchedLength(): number;
    getPattern(): string;
    setPattern(pattern: string): void;
    getPatternSyntax(): number;
    setPatternSyntax(constPatternSyntax: number): void;
    pos(n: number): number;
    setMinimal(isMinimal: boolean): void;
}
declare namespace Regex {
    const CASE_INSENSITIVE: number;
    const CASE_SENSITIVE: number;
    const CARET_AT_ZERO: number;
    const CARET_AT_OFFSET: number;
    const CARET_WONT_MATCH: number;
    const SYNTAX_REG_EXP: number;
    const SYNTAX_WILDCARD: number;
    const SYNTAX_FIXED_STRING: number;
    const SYNTAX_REG_EXP2: number;
    const SYNTAX_WILDCARD_UNIX: number;
    const SYNTAX_W3C_XML_SCHEMA_11: number;
}
