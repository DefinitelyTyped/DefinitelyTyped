/// <reference types="node"/>

import { MinifyOptions } from "terser";

export = terser;

declare function terser(options?: MinifyOptions): NodeJS.ReadWriteStream;
