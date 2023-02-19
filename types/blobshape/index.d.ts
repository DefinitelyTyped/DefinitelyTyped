// Type definitions for blobshape 1.0
// Project: https://github.com/lokesh-coder/blobshape#readme
// Definitions by: OyewoleOyedeji <https://github.com/OyewoleOyedeji>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BlobshapeParameters {
    size?: number;
    growth?: number;
    edges?: number;
    seed?: string | null;
}

export default function ({ size, growth, edges, seed }?: BlobshapeParameters): {
    path: string;
    seedValue: number;
};

export {};
