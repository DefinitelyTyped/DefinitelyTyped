declare class Hasher {
    hashToIndex(key: string | undefined | null, modulo: number): number;
    hashToHex(key: string, algorithm?: string): string;
}

export = Hasher;
