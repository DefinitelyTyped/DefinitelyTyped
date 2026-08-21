export = LargeObject;
declare function LargeObject(rawContent: LargeObjectContent): void;
declare class LargeObject {
    constructor(rawContent: LargeObjectContent);
    rawContent_: LargeObjectContent;
    extraAttributes: any;
    key: number;
    name: string;
    mimeType: number | null;
    content: string;
    toString(): string;
    toUint8Array(): Uint8Array;
    toArrayBuffer(): ArrayBuffer;
    toText(): string;
}
import LargeObjectContent = require('./LargeObjectContent.js');
