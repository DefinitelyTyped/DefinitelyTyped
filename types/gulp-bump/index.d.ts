/// <reference types="node"/>

import * as BumpRegex from "bump-regex";

declare function GulpBump(options?: BumpRegex.Options): NodeJS.ReadWriteStream;

declare namespace GulpBump {
}

export = GulpBump;
