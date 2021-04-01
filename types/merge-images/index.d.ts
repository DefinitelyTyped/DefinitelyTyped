// Type definitions for merge-images 1.1
// Project: https://github.com/lukechilds/merge-images
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Mateus Nardo <https://github.com/mdnm>
//                 Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace mergeImages;

export = mergeImages;

declare function mergeImages(
    sources: mergeImages.ImageSource[],
    options?: mergeImages.Options
): Promise<string>;

declare namespace mergeImages {
    type Image = string | Buffer;

    type ImageSource = Image | { src: Image; x?: number; y?: number; opacity?: number };

    interface Options {
        format?: string;
        quality?: number;
        width?: number;
        height?: number;
        Canvas?: any;
        Image?: any;
    }
}
