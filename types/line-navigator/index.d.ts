declare namespace LineNavigator {
    interface Options {
        /**
         * Encoding
         * @default 'utf8'
         */
        encoding?: string | undefined;
        /**
         * Size of chunk
         * @default 4096
         */
        chunkSize?: number | undefined;
        /**
         * Return error when line is longer than chunkSize, otherwise it will be threated as several lines.
         * @default false
         */
        throwOnLongLines?: boolean | undefined;
    }

    interface FindMatch {
        line: string;
        offset: number;
        length: number;
    }

    interface FindAllResult extends FindMatch {
        index: string;
    }

    type ReadLinesCallback = (
        err: any,
        index: number,
        lines: string[] | undefined,
        isEof: boolean | undefined,
        progress: number | undefined,
    ) => void;
    type FindCallback = (err: any, index: number | undefined, match: FindMatch | undefined) => void;
    type FindAllCallback = (
        err: any,
        index: number,
        limitHit: boolean | undefined,
        results: FindAllResult[] | undefined,
    ) => void;
}

declare class LineNavigator {
    /**
     * Creates an instance of LineNavigator.
     * @param file HTML5 File for client side or a string with file path for server side.
     * @param [options]
     */
    constructor(file: File | string, options?: LineNavigator.Options);

    readSomeLines(indexToStartWith: number, callback: LineNavigator.ReadLinesCallback): void;
    readLines(indexToStartWith: number, numberOfLines: number, callback: LineNavigator.ReadLinesCallback): void;

    find(regex: RegExp, indexToStartWith: number, callback: LineNavigator.FindCallback): void;
    findAll(regex: RegExp, indexToStartWith: number, limit: number, callback: LineNavigator.FindAllCallback): void;
}

export as namespace LineNavigator;
export = LineNavigator;
