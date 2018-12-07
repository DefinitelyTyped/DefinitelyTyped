// Type definitions for chmodr 1.0
// Project: https://github.com/isaacs/chmodr#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { URL } from 'url';

export = chmodr;

declare function chmodr(path: chmodr.PathLike, mode: string | number, callback: (err: NodeJS.ErrnoException) => void): void;

declare namespace chmodr {
    function sync(path: PathLike, mode: string | number): void;

    type PathLike = string | Buffer | URL;
}
