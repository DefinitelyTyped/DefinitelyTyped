// Type definitions for @hapi/hawk 8.0
// Project: https://github.com/hapijs/hawk/
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as sntp from "@hapi/sntp";
import * as client from "./lib/client";
import * as crypto from "./lib/crypto";
import * as plugin from "./lib/plugin";
import * as server from "./lib/server";
import * as utils from "./lib/utils";

export namespace uri {
    const authenticate: typeof server.authenticateBewit;
    const getBewit: typeof client.getBewit;
}

export { client, crypto, plugin, server, sntp, utils };

export as namespace hawk;
