// Type definitions for gunzip-maybe 1.4
// Project: https://github.com/mafintosh/gunzip-maybe
// Definitions by: Thomas Hobson <https://github.com/hexf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";

declare function gunzip(maxRecursion?: number): stream.Transform;

export = gunzip;
