export declare const AttributeType: {
    readonly VERTEX: 1;
    readonly INDEX: 2;
    readonly STORAGE: 4;
};
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];
export declare const GPU_CHUNK_BYTES = 16;
export declare const BlendColorFactor = 211;
export declare const OneMinusBlendColorFactor = 212;
