export namespace Hashsig {
    const enum OPTION {
        NORMAL = 0,
        IGNORE_WHITESPACE = 1,
        SMART_WHITESPACE = 2,
        ALLOW_SMALL_FILES = 4
    }
}

export class Hashsig {
    static create(buf: string, buflen: number, opts: number): Promise<Hashsig>;
    static createFromFile(path: string, opts: number): Promise<Hashsig>;

    compare(b: Hashsig): number;

    free(): void;
}
