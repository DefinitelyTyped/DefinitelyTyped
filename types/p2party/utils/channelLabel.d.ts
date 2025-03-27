export declare const LABEL_ELEMENTS = 3;
export declare const LABEL_STRING_LEN: number;
export declare const LABEL_ELEMENTS_SEPARATOR = "~";
export declare const compileChannelMessageLabel: (channelLabel: string, merkleRoot: string | Uint8Array, hash: string | Uint8Array) => Promise<string>;
export declare const decompileChannelMessageLabel: (channelMessageLabel: string) => Promise<{
    channelLabel: string;
    merkleRootHex: string;
    merkleRoot: Uint8Array;
    hashHex: string;
    hash: Uint8Array;
}>;
//# sourceMappingURL=channelLabel.d.ts.map