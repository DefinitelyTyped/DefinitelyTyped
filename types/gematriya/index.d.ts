// Type definitions for gematriya 2.0
// Project: https://github.com/Scimonster/js-gematriya
// Definitions by: Mendy Berger <https://github.com/MendyBerger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function gematriya(
    num: number,
    options?: { limit?: number | undefined; punctuate?: boolean | undefined; geresh?: boolean | undefined },
): string;
declare function gematriya(str: string, options?: { order?: boolean | undefined }): number;
export = gematriya;
export as namespace gematriya;
