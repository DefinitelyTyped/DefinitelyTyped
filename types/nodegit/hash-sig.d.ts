export class Hashsig {
    static create(buf: string, buflen: number, opts: number): Promise<Hashsig>;
    static createFromFile(path: string, opts: number): Promise<Hashsig>;

    compare(b: Hashsig): number;
    free(): void;
}
