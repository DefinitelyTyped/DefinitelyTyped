export declare class Hasher {
    private encoder;
    private data;
    private constructor();
    static createHash(): Hasher;
    update(data: string | Uint8Array): Hasher;
    digest(encoding?: "hex" | "base64"): Promise<string>;
    private concatUint8Arrays;
    private encodeBuffer;
}
//# sourceMappingURL=hasher.d.ts.map