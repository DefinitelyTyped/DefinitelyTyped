// Type definitions for metascraper-uol 5.14
// Project: https://nicedoc.io/microlinkhq/metascraper/packages/metascraper-uol
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import metascraper = require('metascraper');

declare namespace getData {
    function isValidUrl(config: { url: string }): boolean;
}

declare function getData(): metascraper.Rule;

export = getData;
