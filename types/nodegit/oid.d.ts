export class Oid {
    static fromString(str: string): Oid;
    cmp(b: Oid): number;
    cpy(): Oid;
    equal(b: Oid): number;
    iszero(): number;
    ncmp(b: Oid, len: number): number;
    strcmp(str: string): number;
    streq(str: string): number;
    tostrS(): string;
}
