export = UuidEncoder;
declare class UuidEncoder {
    private static resolveEncodingStr;
    static isCaseSensitiveBase(baseEncodingStr: string): boolean;
    constructor(baseEncodingStr?: string);
    setBaseEncodingStr(baseEncodingStr: string): void;
    encStr: string;
    isCaseSensitive: boolean;
    base: number;
    encode(uuid: string): string;
    decode(str: string): string;
}
