/**
 * If decodeToUnicodeCodePoints is true, the input is treated
 * as a series of Unicode code points.
 *
 * Otherwise, the input is treated as a series of 16-bit UTF-16 code
 * units.
 */
export default class InputStream {
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
    release(marker: number): void;

    seek(_index: number): void;

    getText(start: number, stop: number): string;

    toString(): string;

    get index(): number;
    get size(): number;
}
