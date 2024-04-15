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
