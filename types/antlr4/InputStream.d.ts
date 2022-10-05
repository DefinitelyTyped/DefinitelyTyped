export default class InputStream {
    readonly index: number;
    readonly size: number;

    constructor(data: string, decodeToUnicodeCodePoints?: boolean);

    /**
     * Reset the stream so that it's in the same state it was
     * when the object was created *except* the data array is not
     * touched.
     */
    reset(): void;

    consume(): void;

    LA(offset: number): number;

    LT(offset: number): number;

    /**
     * noop: we have entire buffer
     */
    mark(): -1;

    /**
     * noop: we have entire buffer
     */
    release(marker: any): void;

    seek(index: number): void;

    getText(start: number, stop: number): string;

    toString(): string;
}
