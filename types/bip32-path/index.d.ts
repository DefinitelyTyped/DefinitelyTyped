/**
 * A BIP32 derivation path, stored as an array of child indexes.
 * Hardened indexes have the `0x80000000` bit set.
 */
declare class BIPPath {
    /**
     * @throws If `path` is not a non-empty array of numbers.
     */
    constructor(path: number[]);

    path: number[];

    /** Returns true if `path` is a valid path array. */
    static validatePathArray(path: unknown): boolean;

    /**
     * Returns true if `text` is a valid path string.
     * @param reqRoot Require the `m/` prefix.
     */
    static validateString(text: string, reqRoot?: boolean): boolean;

    static fromPathArray(path: number[]): BIPPath;

    /**
     * Parses a path such as `m/44'/0'/0'/0/0`. `'`, `h` and `H` mark hardened indexes.
     * @param reqRoot Require the `m/` prefix.
     * @throws If `text` is not a valid path.
     */
    static fromString(text: string, reqRoot?: boolean): BIPPath;

    toPathArray(): number[];

    /**
     * @param noRoot Omit the `m/` prefix.
     * @param oldStyle Mark hardened indexes with `h` instead of `'`.
     */
    toString(noRoot?: boolean, oldStyle?: boolean): string;

    inspect(): string;
}

export = BIPPath;
