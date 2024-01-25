import type { CardinalOptions } from "../index";

declare function highlightFile(
    fullPath: string,
    opts: CardinalOptions,
    cb: (error: Error | null, result: string) => void,
): void;
declare function highlightFile(fullPath: string, cb: (error: Error | null, result: string) => void): string;
export = highlightFile;
