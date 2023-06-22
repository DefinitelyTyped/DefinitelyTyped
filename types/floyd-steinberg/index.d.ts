// Type definitions for floyd-steinberg 1.0
// Project: https://github.com/noopkat/floyd-steinberg
// Definitions by: Marek Lukas <https://github.com/tajnymag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ImageDataSubset = Partial<ImageData> & Pick<ImageData, 'width' | 'height' | 'data'>;

declare function floyd_steinberg<T extends ImageDataSubset>(image: T): T;
export = floyd_steinberg;
