export = SimpleLayoutBuffer;
declare function SimpleLayoutBuffer(): void;
declare class SimpleLayoutBuffer {
    private items_;
    private file_;
    private pendingStrings_;
    private pendingStringsLength_;
    getEffectiveLength(): number;
    private flushPendingStrings_;
    push(value: string | any[]): void;
    forEach(callback: (arg0: any) => any, thisArg?: any): void;
    replace(substr: string, newSubStr: string, fromIndex: number): void;
    clear(): void;
    isEmpty(): boolean;
}
