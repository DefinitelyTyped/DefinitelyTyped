export = SimpleLayoutBuffer;
declare function SimpleLayoutBuffer(): void;
declare class SimpleLayoutBuffer {
    private data_;
    private structuredData_;
    length: number;
    push(value: string | any[]): void;
    forEach(callback: (arg0: any) => any, thisArg?: any): void;
    replace(substr: string, newSubStr: string, fromIndex: number): void;
    clear(): void;
}
