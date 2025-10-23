/// <reference types="node" />

import client = require("./lib/client");
import crypto = require("./lib/crypto");
import server = require("./lib/server");
import utils = require("./lib/utils");

export namespace uri {
    const authenticate: typeof server.authenticateBewit;
    const getBewit: typeof client.getBewit;
}

export { client, crypto, server, utils };

export as namespace hawk;
