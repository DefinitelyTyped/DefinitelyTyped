declare class GemVersion {
    toString(): string;
    static isCorrect(version: string): GemVersion;
    static create(version: string): GemVersion;
    constructor(version: string);
    bump(): GemVersion;
    isIdentical(other: GemVersion): boolean;
    isPrerelease(): boolean;
    release(): GemVersion;
    getSegments(): Array<number | string>;
    compare(other: GemVersion): -1 | 0 | 1;
}
export = GemVersion;
