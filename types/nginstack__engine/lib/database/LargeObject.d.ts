export = LargeObject;
declare function LargeObject(): void;
declare class LargeObject {
    key: number;
    name: string;
    content: string;
    mimeType: number | null;
    extraAttributes: any;
    toString(): string;
    toUint8Array(): Uint8Array;
    toArrayBuffer(): ArrayBuffer;
    toText(): string;
}
