interface BlobshapeParameters {
    size?: number;
    growth?: number;
    edges?: number;
    seed?: string | null;
}

declare function blobshape({ size, growth, edges, seed }?: BlobshapeParameters): {
    path: string;
    seedValue: number;
};

export = blobshape;
