/// <reference types="node" />

import stream = require("stream");

declare function gunzip(maxRecursion?: number): stream.Transform;

export = gunzip;
