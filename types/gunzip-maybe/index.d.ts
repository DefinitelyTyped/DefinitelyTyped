/// <reference types="node" />

import * as stream from "stream";

declare function gunzip(maxRecursion?: number): stream.Transform;

export = gunzip;
