/// <reference types="node" />

import * as http from "http";
import metascraper = require("metascraper");

declare namespace getData {
    type PickDefaultFunction = (sizes: FaviconSize[]) => FaviconSize;
    type PickFunction = (sizes: FaviconSize[], pickDefault: PickDefaultFunction) => FaviconSize;

    interface FaviconSize {
        rel?: string | undefined;
        href: string;
        sizes?: string | undefined;
        url: string;
        size: number;
    }

    interface Options {
        /** Any option provided here will passed to `got#options`. */
        gotOpts?: http.ClientRequestArgs | undefined;
        /** Truncate the value extracted to a maximum size (default: `300`). */
        pickFn?: PickFunction | undefined;
    }
}

declare function getData(options?: getData.Options): metascraper.RuleSet;

export = getData;
