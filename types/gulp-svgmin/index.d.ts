// Type definitions for gulp-svgmin 1.2
// Project: https://github.com/ben-eb/gulp-svgmin
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
// (required because svgo specifies 2.2)

/// <reference types="node"/>

import SVGO = require("svgo");
import { Transform } from "stream";
import * as File from "vinyl";

export = GulpSvgmin;

declare function GulpSvgmin(cb: (file: File) => SVGO.Options): Transform;
declare function GulpSvgmin(options?: SVGO.Options): Transform;
