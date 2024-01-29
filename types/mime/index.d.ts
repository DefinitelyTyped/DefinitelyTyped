// Originally imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

import Mime = require("./Mime");

export as namespace mime;

declare namespace mime {
    interface TypeMap {
        [key: string]: string[];
    }
}

declare const mime: Mime;

export = mime;
