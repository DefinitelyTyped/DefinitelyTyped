declare function gematriya(
    num: number,
    options?: { limit?: number | undefined; punctuate?: boolean | undefined; geresh?: boolean | undefined },
): string;
declare function gematriya(str: string, options?: { order?: boolean | undefined }): number;
export = gematriya;
export as namespace gematriya;
