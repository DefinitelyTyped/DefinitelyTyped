// Type definitions for vfile-location 2.0
// Project: https://github.com/vfile/vfile-location
// Definitions by: Ika <https://github.com/ikatyang>
//                 Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import * as VFile from "vfile";

declare function vfileLocation(vfile: string | VFile.VFile): vfileLocation.Location;

declare namespace vfileLocation {
    interface Location {
        /**
         * Get the `offset` (`number`) for a line and column-based `position` in the bound file.
         * Returns `-1` when given invalid or out of bounds input.
         */
        toOffset(position: { line: number; column: number }): number;
        /**
         * Get the line and column-based `position` for `offset` in the bound file.
         */
        toPosition(offset: number): { line: number; column: number; offset: number };
    }
}

export = vfileLocation;
