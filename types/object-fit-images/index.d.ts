// Type definitions for object-fit-images 3.2
// Project: https://github.com/bfred-it/object-fit-images#readme
// Definitions by: Christopher Parsons <https://github.com/cwparsons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface ObjectFitImagesOptions {
    watchMQ?: boolean;
}

export default function objectFitImages(
    images?:
        | Element
        | Element[]
        | HTMLCollectionOf<HTMLElement>
        | NodeList
        | string
        | null,
    options?: ObjectFitImagesOptions
): void;
