declare class Hasher {
    hashToIndex(key: string, modulo: number): number;
    hashToHex(key: string, algorithm?: string): string;
}

export = Hasher;
