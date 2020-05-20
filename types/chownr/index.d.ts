// Type definitions for chownr 1.0
// Project: https://github.com/isaacs/chownr#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { URL } from 'url';

export = chownr;

declare function chownr(path: chownr.PathLike, uid: number, gid: number, callback: (err: NodeJS.ErrnoException) => void): void;

declare namespace chownr {
    function sync(path: PathLike, uid: number, gid: number): void;

    type PathLike = string | Buffer | URL;
}
