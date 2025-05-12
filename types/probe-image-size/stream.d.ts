/// <reference types="node" />

import { Readable } from "node:stream";
import { ProbeResult } from ".";

declare function probeStream(source: Readable, keepOpen?: boolean): Promise<ProbeResult>;

export = probeStream;
