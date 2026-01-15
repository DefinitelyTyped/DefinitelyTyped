export = LargeObjectContent;
declare function LargeObjectContent(content?: LargeObjectContent): void;
declare class LargeObjectContent {
    constructor(content?: LargeObjectContent);
    data: string | null;
    storagePath: string | null;
    storageProvider: number;
    encoding: number | null;
    compression: number | null;
    private decode_;
    private decompress_;
    toText(): string;
    toBinaryString(): string;
    toUint8Array(): Uint8Array;
    private getContentAsBinaryString_;
}
