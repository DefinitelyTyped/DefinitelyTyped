declare const lzwCompress: {
    pack(input: unknown): unknown;
    unpack(packed: unknown): unknown;
    enableLogging(enable: boolean): void;
};

export = lzwCompress;
