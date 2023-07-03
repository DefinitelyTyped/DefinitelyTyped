// Type definitions for @bramus/pagination-sequence 1.2
// Project: https://github.com/bramus/js-pagination-sequence#readme
// Definitions by: Kristján Jökull Sigurðsson <https://github.com/kristjanjokull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@bramus/pagination-sequence' {
    function generate(
        curPage: number,
        numPages: number,
        numPagesAtEdges?: number,
        numPagesAroundCurrent?: number,
        glue?: string,
    ): Array<number | string>;

    type Options = {
        curPage?: number;
        numPages?: number;
        numPagesAtEdges?: number;
        numPagesAroundCurrent?: number;
        glue?: string;
    };

    function generateFromObj(opts: Options): Array<string | number>;

    export { generate, generateFromObj };
}
