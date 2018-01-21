// Type definitions for vfile-location 2.0
// Project: https://github.com/vfile/vfile-location
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as VFile from "vfile";

declare function vfileLocation(vfile: VFile.VFile<{}>): vfileLocation.Location;

declare namespace vfileLocation {
    interface Location {
        toOffset(position: { line: number; column: number }): number;
        toPosition(offset: number): { line: number; column: number; offset: number };
    }
}

export = vfileLocation;
