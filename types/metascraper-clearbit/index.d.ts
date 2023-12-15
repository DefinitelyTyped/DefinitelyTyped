/// <reference types="node" />

import * as http from "http";

import metascraper = require("metascraper");

declare namespace getData {
    interface Options {
        /** Any option provided here will passed to `got#options`. */
        gotOpts?: http.ClientRequestArgs | undefined;
    }
}

declare function getData(options?: getData.Options): metascraper.RuleSet;

export = getData;
