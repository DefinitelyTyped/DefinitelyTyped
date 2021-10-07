// Type definitions for @hapi/hawk 8.0
// Project: https://github.com/hapijs/hawk/
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as sntp from '@hapi/sntp';
import * as server from './lib/server';
import * as client from './lib/client';
import * as crypto from './lib/crypto';
import * as utils from './lib/utils';
import * as plugin from './lib/plugin';

export namespace uri {
    const authenticate: typeof server.authenticateBewit;
    const getBewit: typeof client.getBewit;
}

export { sntp, server, client, crypto, utils, plugin };

export as namespace hawk;
