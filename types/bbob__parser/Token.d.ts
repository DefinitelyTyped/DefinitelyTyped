export class Token {
    constructor(type?: TOKEN_TYPE, value?: string, line?: number, row?: number);
    [TYPE_ID]?: TOKEN_TYPE;
    [VALUE_ID]?: string;
    [LINE_ID]?: number;
    [COLUMN_ID]?: number;
    isEmpty(): boolean;
    isText(): boolean;
    isTag(): boolean;
    isAttrName(): boolean;
    isAttrValue(): boolean;
    isStart(): boolean;
    isEnd(): boolean;
    getName(): string;
    getValue(): string;
    getLine(): number;
    getColumn(): number;
    toString(): string;
}

export const TYPE_ID = "type";
export const VALUE_ID = "value";
export const LINE_ID = "line";
export const COLUMN_ID = "row";
export const TYPE_WORD = 1;
export const TYPE_TAG = 2;
export const TYPE_ATTR_NAME = 3;
export const TYPE_ATTR_VALUE = 4;
export const TYPE_SPACE = 5;
export const TYPE_NEW_LINE = 6;
export type TOKEN_TYPE =
    | typeof TYPE_WORD
    | typeof TYPE_TAG
    | typeof TYPE_ATTR_NAME
    | typeof TYPE_ATTR_VALUE
    | typeof TYPE_SPACE
    | typeof TYPE_NEW_LINE;

export default Token;
