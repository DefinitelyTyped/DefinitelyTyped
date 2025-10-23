/// <reference types="node" />

import sntp = require("@hapi/sntp");
import client = require("./lib/client");
import crypto = require("./lib/crypto");
import plugin = require("./lib/plugin");
import server = require("./lib/server");
import utils = require("./lib/utils");

export namespace uri {
    const authenticate: typeof server.authenticateBewit;
    const getBewit: typeof client.getBewit;
}

export { client, crypto, plugin, server, sntp, utils };

export as namespace hawk;
