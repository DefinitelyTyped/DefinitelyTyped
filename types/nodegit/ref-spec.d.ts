export class Refspec {
    static parse(input: string, is_fetch: number): Promise<Refspec>;
    direction(): number;
    dst(): string;
    dstMatches(refname: string): number;
    force(): number;
    src(): string;
    srcMatches(refname: string): number;
    string(): string;
}
