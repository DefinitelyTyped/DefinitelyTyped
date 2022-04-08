// Type definitions for img-diff-js 0.4
// Project: https://github.com/reg-viz/img-diff-js#readme
// Definitions by: Daniel Chif <https://github.com/nadchif>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ImgDiffOptions {
    actualFilename: string;
    expectedFilename: string;
    diffFilename?: string;
    /** {default:false} */
    generateOnlyDiffFile?: boolean;
    options?: {
        /** {default: 0.1} */
        threshold?: number;
        /** {default:false} */
        includeAA?: boolean;
    };
}

export interface ImgDiffResult {
    width: number;
    height: number;
    imagesAreSame: boolean;
    diffCount: number;
}
/**
 * Create image differential between two images.
 */
export function imgDiff(opt: ImgDiffOptions): Promise<ImgDiffResult>;

export function registerDecoder(extensions: string[], decoder: (filename: string) => any): void;
