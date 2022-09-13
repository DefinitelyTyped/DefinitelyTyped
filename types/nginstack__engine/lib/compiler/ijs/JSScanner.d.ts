export = JSScanner;
declare function JSScanner(): void;
declare class JSScanner {
    prepare(source: string): void;
    nextToken(): string;
    clear(): void;
    lineBreaks: boolean;
    lineBreaksInsideString: boolean;
    position: number;
    token: string;
    source: string;
    tokenWord: any;
}
