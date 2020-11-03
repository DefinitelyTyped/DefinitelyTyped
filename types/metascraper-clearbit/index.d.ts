// Type definitions for metascraper-clearbit 5.14
// Project: https://nicedoc.io/microlinkhq/metascraper/packages/metascraper-clearbit
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';

import metascraper = require('metascraper');

declare namespace getData {
    interface Options {
        /** Any option provided here will passed to `got#options`. */
        gotOpts?: http.ClientRequestArgs;
    }
}

declare function getData(options?: getData.Options): metascraper.Rule;

export = getData;
