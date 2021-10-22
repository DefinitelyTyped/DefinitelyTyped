export = MemoryStream;
declare function MemoryStream(arrayBuffer?: ArrayBuffer): void;
declare class MemoryStream {
    constructor(arrayBuffer?: ArrayBuffer);
    getMemoryBuffer(): any;
    position: any;
    getSize(): number;
    read(opt_qty?: number): string;
    write(content: string): number;
}
