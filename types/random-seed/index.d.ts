export interface RandomSeed {
    (range: number): number;
    range(range: number): number;
    random(): number;
    floatBetween(min: number, max: number): number;
    intBetween(min: number, max: number): number;

    string(count: number): string;
    seed(seed: string): void;

    cleanString(inStr: string): string;
    hashString(inStr: string): string;

    addEntropy(...args: any[]): void;
    initState(): void;

    done(): void;
}

export function create(seed?: string): RandomSeed;
