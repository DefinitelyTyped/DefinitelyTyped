// Type definitions for object-fit-images 3.2
// Project: https://github.com/bfred-it/object-fit-images#readme
// Definitions by: Ranjit Singh <https://github.com/rann91>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace objectFitImages;

export = objectFitImages;

declare function objectFitImages(
    images?: string | HTMLElement | HTMLElement[] | NodeList | null,
    options?: { watchMQ?: boolean | undefined; skipTest?: boolean | undefined },
): void;
