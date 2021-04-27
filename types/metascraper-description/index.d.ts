// Type definitions for metascraper-description 5.14
// Project: https://nicedoc.io/microlinkhq/metascraper/packages/metascraper-description
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import metascraper = require('metascraper');

declare namespace getData {
    interface Options {
        /** Truncate the value extracted to a maximum size (default: `300`). */
        truncateLength?: number;
    }
}

declare function getData(options?: getData.Options): metascraper.Rule;

export = getData;
