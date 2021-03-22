// Type definitions for object-fit-images 3.2
// Project: https://github.com/bfred-it/object-fit-images#readme
// Definitions by: Ranjit Singh <https://github.com/rann91>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace objectFillImages;

export = objectFillImages;

declare function objectFillImages(
    images: string | HTMLElement | HTMLElement[] | NodeList | null,
    options?: { watchMQ?: boolean; skipTest?: boolean },
): void;
