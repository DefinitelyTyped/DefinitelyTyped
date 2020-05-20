export class InputStream {
    readonly index: number;
    readonly size: number;

    constructor(data: string, decodeToUnicodeCodePoints?: boolean);

    reset(): void;

    consume(): void;

    LA(offset: number): string;

    LT(offset: number): string;

    mark(): number;

    release(marker: any): number;

    seek(index: number): void;

    getText(start: number, stop: number): string;

    toString(): string;
}
