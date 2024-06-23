/// <reference types="node" />

import { randomBytes as _randomBytes } from "crypto";

export = randomBytes;

declare const randomBytes: typeof _randomBytes;
