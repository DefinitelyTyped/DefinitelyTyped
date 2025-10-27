/// <reference types="node"/>

import BumpRegex = require("bump-regex");

declare function GulpBump(options?: BumpRegex.Options): NodeJS.ReadWriteStream;

declare namespace GulpBump {
}

export = GulpBump;
