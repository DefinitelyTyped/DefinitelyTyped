// Type definitions for hawk 9.0
// Project: https://github.com/mozilla/hawk/
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as client from "./lib/client";
import * as crypto from "./lib/crypto";
import * as server from "./lib/server";
import * as utils from "./lib/utils";

export namespace uri {
    const authenticate: typeof server.authenticateBewit;
    const getBewit: typeof client.getBewit;
}

export { client, crypto, server, utils };

export as namespace hawk;
