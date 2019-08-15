export class Refspec {
    direction(): number;
    dst(): string;
    dstMatches(refname: string): number;
    force(): number;
    src(): string;
    srcMatches(refname: string): number;
}
