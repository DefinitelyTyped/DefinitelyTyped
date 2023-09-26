import metascraper = require("metascraper");

declare namespace getData {
    interface Options {
        /** Truncate the value extracted to a maximum size (default: `300`). */
        truncateLength?: number | undefined;
    }
}

declare function getData(options?: getData.Options): metascraper.Rule;

export = getData;
