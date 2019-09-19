// Type definitions for merge-images 1.1
// Project: https://github.com/lukechilds/merge-images
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace mergeImages;

export = mergeImages;

declare function mergeImages(
    sources: mergeImages.ImageSource[],
    options?: mergeImages.Options
): Promise<string>;

declare namespace mergeImages {
    type ImageSource = string | { src: string; x?: number; y?: number; opacity?: number };

    interface Options {
        format?: string;
        quality?: number;
        width?: number;
        height?: number;
        Canvas?: any;
    }
}
