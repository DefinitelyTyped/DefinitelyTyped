declare class EloRank {
    constructor(kFactor?: number);
    setKFactor(kFactor: number): void;
    getKFactor(): number;
    getExpected(a: number, b: number): number;
    updateRating(expected: number, actual: number, current: number): number;
}

export = EloRank;
