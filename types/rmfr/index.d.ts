// Type definitions for rmfr 2.0
// Project: https://github.com/shinnn/rmfr#readme
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import rimraf = require("rimraf");

declare namespace rmfr {
    type Options = rimraf.Options & {
        glob?: rimraf.Options["glob"] | true;
        disableGlob?: never;
    };
}
declare function rmfr(path: string, options?: rmfr.Options): Promise<void>;

export = rmfr;
