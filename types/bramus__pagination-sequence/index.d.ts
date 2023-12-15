declare function generate(
    curPage: number,
    numPages: number,
    numPagesAtEdges?: number,
    numPagesAroundCurrent?: number,
    glue?: string,
): Array<number | string>;

interface Options {
    curPage?: number;
    numPages?: number;
    numPagesAtEdges?: number;
    numPagesAroundCurrent?: number;
    glue?: string;
}

declare function generateFromObj(opts?: Options): Array<string | number>;

export { generate, generateFromObj };
