export as namespace objectFitImages;

export = objectFitImages;

declare function objectFitImages(
    images?: string | HTMLElement | HTMLElement[] | NodeList | null,
    options?: { watchMQ?: boolean | undefined; skipTest?: boolean | undefined },
): void;
