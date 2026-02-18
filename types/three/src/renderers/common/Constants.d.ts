export declare const AttributeType: {
    readonly VERTEX: 1;
    readonly INDEX: 2;
    readonly STORAGE: 3;
    readonly INDIRECT: 4;
};
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

export const GPU_CHUNK_BYTES: 16;

export const BlendColorFactor: 211;
export const OneMinusBlendColorFactor: 212;
