/// <reference types="node" />
import { PathLike } from "fs";

declare function linesert(path: PathLike | number): typeof linesert;

declare namespace linesert {
    function beforeLine(lineIndex: number): typeof linesert;
    function afterLine(lineIndex: number): typeof linesert;
    function insert(
        content: string | string[],
        callback?: (err: NodeJS.ErrnoException | null, result: string) => void,
    ): void;
}

export = linesert;
