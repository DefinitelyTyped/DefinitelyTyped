// Type definitions for <SAMPLE> v0.8.1 
// Project: https://github.com/<SAMPLE>.js
// Definitions by: Fred Eisele <https://github.com/phreed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/index.d.ts" />

/**
### 0.0.1 Changelog (https://github.com/<SAMPLE>)

#### TODO:

Match samples from README.md

- [x] do it.

*/

declare module "sample" {
    import * as fs from "fs";

    namespace Sample {

	type Dictionary = {[key: string]: any};

    }

    export = Sample;
}

