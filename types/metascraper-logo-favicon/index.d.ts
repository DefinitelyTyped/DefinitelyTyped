// Type definitions for metascraper-logo-favicon 5.14
// Project: https://nicedoc.io/microlinkhq/metascraper/packages/metascraper-logo-favicon
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/// <reference types="node" />

import * as http from 'http';
import metascraper = require('metascraper');

declare namespace getData {
    type PickDefaultFunction = (sizes: FaviconSize[]) => FaviconSize;
    type PickFunction = (sizes: FaviconSize[], pickDefault: PickDefaultFunction) => FaviconSize;

    interface FaviconSize {
        rel?: string;
        href: string;
        sizes?: string;
        url: string;
        size: number;
    }

    interface Options {
        /** Any option provided here will passed to `got#options`. */
        gotOpts?: http.ClientRequestArgs;
        /** Truncate the value extracted to a maximum size (default: `300`). */
        pickFn?: PickFunction;
    }
}

declare function getData(options?: getData.Options): metascraper.Rule;

export = getData;
