export = MemoryStream;
declare function MemoryStream(arrayBuffer?: ArrayBuffer): void;
declare class MemoryStream {
    constructor(arrayBuffer?: ArrayBuffer);
    position: number;
    size: number;
    getMemoryBuffer(): any;
    read(opt_qty?: number): string;
    write(content: string): number;
}
